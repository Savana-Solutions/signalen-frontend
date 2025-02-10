import { ensureHttps } from 'hooks/useFetch'

export const filesUpload = ({ url, files }: { url: string; files: FileList }) =>
  Promise.all(
    Array.from(files).map((file) => {
      const formData = new FormData()
      formData.append('file', file)

      const secureUrl = ensureHttps(url)

      return fetch(secureUrl, {
        body: formData,
        method: 'POST'
      })
    })
  )
