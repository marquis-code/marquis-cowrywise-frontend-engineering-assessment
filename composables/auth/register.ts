import { auth_api } from "@/apiFactory/modules/auth";
import { useCustomToast } from "@/composables/core/useCustomToast";
const credential = {
  bvn: ref(""),
  phone: ref(""),
};

export const use_auth_register = () => {
  const loading = ref(false);
  const router = useRouter();
  const { showToast } = useCustomToast();

  const register = async () => {
    loading.value = true;

    const payload = {
      bvn: credential.bvn.value,
      phone: credential.phone.value,
    };

    try {
      const res = (await auth_api.$_register(payload)) as any;

      loading.value = false;

      if (res.type !== "ERROR") {
        router.push(`/verify-account?userId=${res.data.id}`);
      } else {
        console.log(res.data, 'error here')
        showToast({
          title: "Error",
          message: res.data.message,
          toastType: "error",
          duration: 3000,
        });
      }
    } catch (error) {
      loading.value = false;
      showToast({
        title: "Error",
        message: "Registration failed. Please try again.",
        toastType: "error",
        duration: 3000,
      });
    }
  };

  const isFormDisabled = computed(() => {
    return loading.value || !credential.bvn.value || !credential.phone.value;
  });

  return { credential, register, loading, isFormDisabled };
};
