import { useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const useAuthorize = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const userId = queryClient.getQueryData(["userId"]);

  useEffect(() => {
    if (!userId) {
      navigate("/onboarding/login"); // Redirect to login or another appropriate page
    }
  }, [userId, navigate]);
};
