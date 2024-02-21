import NavigationRoutes from "@Navigator/NavigationRoutes";
import { navigate } from "@Service/navigationService";
import { useRef } from "react";
import { ForgotPasswordPayload } from "./types";

export default function useForgotPasswordContainer() {
  const refForm = useRef();

  // const { mutate: forgotPasswordMutate } = useMutation(forgotPassword, {
  //   onSuccess: (data: any) => {
  //     console.log(data,"forgotPasswordMutate ONSUCCESS")
  //     navigate(NavigationRoutes.AUTH_STACK.OTP_SCREEN, { userEmail : payload?.email });
  //   }
  // });

  const onSubmitForm = () => {
    const data = refForm.current?.onSubmitForm();
    if (data != null) {
      let payload: ForgotPasswordPayload = {
        email: data.Email,
      };
      console.log(payload, "payload of Forgot Password");
      // forgotPasswordMutate(payload);
      navigate(NavigationRoutes.AUTH_STACK.OTP_SCREEN, {
        userEmail: payload?.email,
      });
    }
  };

  return {
    onSubmitForm,
    refForm,
  };
}
