import MyAnimeList from "@/app/components/MyAnimeList";

export default async function Home() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`
  );
  const anime = await response.json();

  return (
    <div className="p-5 md:px-20 md:py-10">
      <h1 className="text-md mb-4">MOST POPULAR</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
        {anime.data.map((data) => {
          return (
            <div key={data.mal_id} className="shadow-xl">
              <MyAnimeList
              title={data.title}
              images={data.images.webp.image_url}
              id={data.mal_id}
            />
            </div>
          );
        })}
      </div>
    </div>
  );
}
