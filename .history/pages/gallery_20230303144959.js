import Head from "next/head";

const IMAGES = [
  {
    path: "/gallery/1.jpeg",
    title: "C-STEMP Staff",
    desc: "Northern Ireland",
  },
  {
    path: "/artisanal/1.jpg",
    title: "CAA 2021",
    desc: "Artisan Receiving Awards",
  },
  {
    path: "/gallery/2.jpg",
    title: "Africa Housing Awards 2022",
    desc: "C-STEMP MD Receiving an Award",
  },
  {
    path: "/gallery/3.jpeg",
    title: "CAA 2021",
    desc: "Artisan Receiving Awards",
  },
  {
    path: "/gallery/4.jpeg",
    title: "CAA 2021",
    desc: "Artisan Receiving Awards",
  },
  {
    path: "/gallery/5.jpg",
    title: "CAA 2021",
    desc: "Artisan Receiving Awards",
  },
  {
    path: "/gallery/6.jpg",
    title: "CAA 2021",
    desc: "Artisan Receiving Awards",
  },
  {
    path: "/gallery/7.jpg",
    title: "CAA 2021",
    desc: "Artisan Receiving Awards",
  },
  {
    path: "/gallery/8.jpg",
    title: "CAA 2021",
    desc: "Artisan Receiving Awards",
  },
  {
    path: "/gallery/9.jpg",
    title: "CAA 2021",
    desc: "Artisan Receiving Awards",
  },
  {
    path: "/gallery/10.jpg",
    title: "CAA 2021",
    desc: "Artisan Receiving Awards",
  },
  {
    path: "/gallery/11.jpg",
    title: "CAA 2021",
    desc: "Artisan Receiving Awards",
  },
  {
    path: "/gallery/12.jpg",
    title: "CAA 2021",
    desc: "Artisan Receiving Awards",
  },
  {
    path: "/gallery/13.jpg",
    title: "CAA 2021",
    desc: "Artisan Receiing Awards",
  },
  {
    path: "/gallery/14.jpg",
    title: "CAA 2021",
    desc: "Artisan Receiving Awards",
  },
  {
    path: "/gallery/15.jpg",
    title: "CAA 2021",
    desc: "Artisan Receiving Awards",
  },
  {
    path: "/gallery/16.jpg",
    title: "CAA 2021",
    desc: "Artisan Receiving Awards",
  },
  {
    path: "/gallery/17.jpg",
    title: "CAA 2021",
    desc: "Artisan Receiving Awards",
  },
  {
    path: "/gallery/18.jpg",
    title: "CAA 2021",
    desc: "Artisan Receiving Awards",
  },
  {
    path: "/gallery/19.jpg",
    title: "CAA 2021",
    desc: "Artisan Receiving Awards",
  },
  {
    path: "/gallery/20.jpg",
    title: "CAA 2021",
    desc: "Artisan Receiving Awards",
  },
  {
    path: "/gallery/21.jpg",
    title: "CAA 2021",
    desc: "Artisan Receiving Awards",
  },
  {
    path: "/gallery/22.jpg",
    title: "CAA 2021",
    desc: "Artisan Receiving Awards",
  },
  {
    path: "/gallery/23.jpg",
    title: "CAA 2021",
    desc: "Artisan Receiving Awards",
  },
  {
    path: "/gallery/24.jpg",
    title: "CAA 2021",
    desc: "Artisan Receiving Awards",
  },
];

export default function Gallery() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Head>
        <title>Gallery Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Gallery</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Add your gallery images here */}
          {IMAGES.map((img, idx) => {
            return (
              <div
                key={idx}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <img
                  src={img.path}
                  alt="Image description"
                  className="w-full h-64 object-cover hover:scale-110 duration-500"
                />
                <div className="p-4">
                  <h2 className="text-lg font-bold text-gray-900 mb-2">
                    {img.title}
                  </h2>
                  <p className="text-gray-700">{img.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}
