export function formatDate(dateString: string) {
  try {
    // ISO 형식인 경우
    if (dateString.includes("T")) {
      return new Date(`${dateString}`).toLocaleDateString("ko-KR", {
        day: "numeric",
        month: "long",
        year: "numeric",
        timeZone: "UTC",
      });
    }

    // "YYYY-MM-DD HH:MM:SS" 형식인 경우
    const [datePart, timePart] = dateString.split(" ");
    const [year, month, day] = datePart.split("-").map(Number);

    const date = new Date(year, month - 1, day);
    return date.toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  } catch (error) {
    return dateString; // 변환 실패 시 원본 반환
  }
}
