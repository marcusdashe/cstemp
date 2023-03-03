import Head from "next/head";

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
        </div>
      </main>
    </div>
  );
}
