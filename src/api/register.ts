import axios from "axios";

export async function handleSend(formData: any, navigate: (path: string) => void): Promise<void> {
  try {
    const response = await axios.post(
      "http://localhost:3000/users/user",
      formData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
        if (response.status === 201) {
          navigate('/about');
        }
    } catch (error) {
      console.error("Error:", error);
    }
};