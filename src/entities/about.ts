export type AboutDataType = {
  title: string,
  content: string
}

export const getAboutData = async () => {
  return {
    title: "large",
    content: "내용"
  }
}