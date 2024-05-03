import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { signIn } from "../services/authService";
import toast from "react-hot-toast";

export const useLogin = (setUser) => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const { mutate, isLoading } = useMutation({
    mutationFn: (data) => signIn(data),
    onSuccess: (data) => {
      setUser(data.user);
      toast.success(data.message);
      navigate("/app");
    },
    onError: () => {
      // Handle errors (e.g., display error messages to the user)
      toast.error(`Could not log you in😥`);
    },
  });

  const onSubmit = async (data) => {
    const { email, password } = data;
    mutate({ email, password });
  };

  return { register, handleSubmit, onSubmit, isLoading };
};
