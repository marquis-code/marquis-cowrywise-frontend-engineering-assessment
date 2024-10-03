import CryptoJS from "crypto-js"; // Use same encryption library
import { auth_api } from "@/apiFactory/modules/auth";
import { useUser } from "@/composables/auth/user";
import { useCustomToast } from "@/composables/core/useCustomToast";

const secretKey = "LoanIQEncryption";

const credential = {
  passcode: ref(""),
};

export const use_create_passcode = () => {
  const loading = ref(false);
  const { showToast } = useCustomToast();
  const getEncryptedData = () => {
    const encryptedUserId = localStorage.getItem("userId");
    const encryptedOtp = localStorage.getItem("otp");

    if (encryptedUserId && encryptedOtp) {
      const userId = CryptoJS.AES.decrypt(encryptedUserId, secretKey).toString(
        CryptoJS.enc.Utf8
      );
      const otp = CryptoJS.AES.decrypt(encryptedOtp, secretKey).toString(
        CryptoJS.enc.Utf8
      );
      return { userId, otp };
    }
    return null;
  };

  const { userId, otp } = getEncryptedData() as any;

  // When sending the final payload for passcode creation
  const createPasscode = async () => {
    const payload = {
      userId,
      otp,
      passcode: credential.passcode.value,
    };
    loading.value = true;

    try {
      const res = (await auth_api.$_create_passcode(payload)) as any;
      if (res.type !== "ERROR") {
        showToast({
          title: "Success",
          message: "Passcode created successfully",
          toastType: "success",
          duration: 3000,
        });
        useUser().createUser(res.data);
      } else {
        showToast({
          title: "Error",
          message: res.message,
          toastType: "error",
          duration: 3000,
        });
      }
    } catch (error) {
      showToast({
        title: "Error",
        message: "An error occurred while creating passcode.",
        toastType: "error",
        duration: 3000,
      });
    }
    loading.value = false;
  };

  return {
    createPasscode,
    loading,
    credential,
  };
};
