import { useRouter } from "next/navigation";

export default function HandleBack() {
  const router = useRouter();
  const handleBack = () => {
    router.back(); // Navigates to the previous page in history
  };
  return (
    <>
      <span style={{ cursor: 'pointer' }} onClick={handleBack}>
        Back
      </span>
    </>
  );
}
