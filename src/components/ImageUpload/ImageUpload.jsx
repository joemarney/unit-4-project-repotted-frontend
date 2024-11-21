import { imageUpload } from "../../services/imageUpload";

export default function ImageUpload({ formData, setFormData, fieldName, setImageUp }) {
  async function handleImage(e) {
    setImageUp(true);
    const file = e.target.files[0];
    try {
      const { data } = await imageUpload(file);
      const imageURL = data.secure_url;
      setFormData({ ...formData, [fieldName]: imageURL });
      setImageUp(false);
    } catch (error) {
      console.log(error);
    } finally {
      setImageUp(false);
    }
  }

  return (
    <main>
      {formData.avatar && <img src={formData.avatar} />}
      <input type="file" name={fieldName} multiple onChange={handleImage} />
    </main>
  );
}
