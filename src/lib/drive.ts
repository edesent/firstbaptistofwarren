export interface GalleryPhoto {
  id: string;
  caption: string;
  thumbSrc: string;
  fullSrc: string;
  width?: number;
  height?: number;
}

interface DriveFile {
  id: string;
  name: string;
  thumbnailLink?: string;
  imageMediaMetadata?: { width?: number; height?: number };
}

export async function getDrivePhotos(): Promise<GalleryPhoto[]> {
  const folderId = process.env.GOOGLE_DRIVE_GALLERY_FOLDER_ID;
  const apiKey = process.env.GOOGLE_DRIVE_API_KEY;
  if (!folderId || !apiKey) return [];

  const params = new URLSearchParams({
    q: `'${folderId}' in parents and mimeType contains 'image/' and trashed = false`,
    fields:
      "files(id,name,thumbnailLink,imageMediaMetadata(width,height))",
    orderBy: "createdTime desc",
    pageSize: "1000",
    key: apiKey,
  });

  try {
    const res = await fetch(
      `https://www.googleapis.com/drive/v3/files?${params}`,
      { next: { revalidate: 600 } },
    );
    if (!res.ok) return [];
    const data = (await res.json()) as { files?: DriveFile[] };
    return (data.files ?? [])
      .filter((f) => f.thumbnailLink)
      .map((f) => {
        const base = f.thumbnailLink!.replace(/=s\d+(-[a-z]+)?$/, "");
        return {
          id: f.id,
          caption: f.name.replace(/\.[^.]+$/, ""),
          thumbSrc: `${base}=w800`,
          fullSrc: `${base}=w2000`,
          width: f.imageMediaMetadata?.width,
          height: f.imageMediaMetadata?.height,
        };
      });
  } catch {
    return [];
  }
}
