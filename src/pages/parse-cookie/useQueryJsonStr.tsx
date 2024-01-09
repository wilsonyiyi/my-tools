import { useSearchParams } from "umi";

export function useQueryJsonStr() {
  const [searchParams] = useSearchParams();
  const jsonStrEncoded = searchParams.get("jsonStr") || "";
  const jsonStr = decodeURIComponent(jsonStrEncoded);
  return formatJsonStr(jsonStr);
}

function formatJsonStr(jsonStr: string) {
  try {
    return JSON.parse(jsonStr) as Array<unknown>;
  } catch (error) {
    return [];
  }
}
