import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { signIn } from "../services/authService";
import toast from "react-hot-toast";

export const useAuth = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation({
    mutationFn: (data) => signIn(data),
    onSuccess: (data) => {
      queryClient.setQueryData(['userId'], {id : data.user._id});
      toast.success(data.message);
      navigate("/app");
    },
    onError: (err) => {
      // Handle errors (e.g., display error messages to the user)
      toast.error(`Could not log you in😥`, err);
    },
  });

  const onSubmit = async (data) => {
    const { email, password } = data;
    mutate({ email, password });
  };

  return { register, handleSubmit, onSubmit, isLoading };
};
