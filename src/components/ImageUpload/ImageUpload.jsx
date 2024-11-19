import { imageUpload } from "../../services/imageUpload";

export default function ImageUpload(props) {
  async function handleImage(e) {
    props.setImageUp(true);
    try {
      const files = e.target.files;

      const images = [];

      for (let file of files) {
        const { data } = await imageUpload(file);

        images.push(data.secure_url);
      }
      props.setFormData({ ...props.formData, [props.fieldName]: images });
      props.setImageUp(false);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <main>
      {/* {props.formData.images.map((image) => {
        return <img key={image} src={image} />;
      })} */}
      <input type="file" name="image" multiple onChange={handleImage} />
    </main>
  );
}
