import CryptoJS from "crypto-js"; // You can install this package for encryption
import { auth_api } from "@/apiFactory/modules/auth";
import { useCustomToast } from "@/composables/core/useCustomToast";

// Encryption key - Store this securely
const secretKey = "LoanIQEncryption";

export const use_auth_verify_otp = () => {
  const Router = useRouter();
  const { showToast } = useCustomToast();
  const credential = {
    userId: ref(""),
    code: ref(""),
  } as any;

  const loading = ref(false);
  const errorMessage = ref("");

  const verify_OTP = async () => {
    loading.value = true;
    errorMessage.value = "";

    try {
      const otp = String(credential?.otp?.value?.join(""));

      const res = (await auth_api.$_verify_otp({
        email: credential.userId.value,
        otp,
      })) as any;

      loading.value = false;

      if (res.type !== "ERROR") {
        showToast({
          title: "Success",
          message: "OTP was verified successfully",
          toastType: "success",
          duration: 3000,
        });

        // Encrypt and store userId and otp in localStorage
        const encryptedUserId = CryptoJS.AES.encrypt(
          res?.data?.id,
          secretKey
        ).toString();
        const encryptedOtp = CryptoJS.AES.encrypt(otp, secretKey).toString();
        localStorage.setItem("userId", encryptedUserId);
        localStorage.setItem("otp", encryptedOtp);

        Router.push(`/create-password?userId=${res?.data?.id}`);
      } else {
        showToast({
          title: "Error",
          message: errorMessage.value,
          toastType: "error",
          duration: 3000,
        });
        return { success: false, error: errorMessage.value };
      }
    } catch (error: any) {
      loading.value = false;
      showToast({
        title: error?.message || "An unexpected error occurred.",
        message: errorMessage.value,
        toastType: "error",
        duration: 3000,
      });
      return { success: false, error: errorMessage.value };
    }
  };

  return { credential, verify_OTP, loading };
};
