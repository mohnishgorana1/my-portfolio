"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import { TextShimmer } from "@/components/ui/text-shimmer";

const ITEMS_PER_PAGE = 10;

function Pagination() {
  const [fetchedData, setFetchedData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const totalPages = Math.ceil(fetchedData.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  const paginatedProducts = fetchedData.slice(startIndex, endIndex);

  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://dummyjson.com/products?limit=100"
        );
        console.log("pro", response);
        if (response.status == 200) {
          setFetchedData(response.data.products);
        } else {
          setError("Failed to Fetch Products");
        }
      } catch (error) {
        setError("Failed to Fetch Products");
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchAllProducts();
  }, []);
  const nextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };
  const prevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };
  const goToPage = (pageNumber: number) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const pageNumbersArray = Array.from({ length: totalPages }, (_, i) => i + 1);


  return (
    <main className="min-h-72 grid md:grid-cols-2 gap-x-3 gap-y-3 mb-5">
      {/* fetched data */}
      <div className="overflow-auto  bg-neutral-900 px-4 py-2 rounded-sm md:rounded-xl grid md:grid-cols-2  gap-3">
        {loading && (
          <TextShimmer className="font-mono text-sm" duration={1}>
            Fetching...
          </TextShimmer>
        )}
        {paginatedProducts &&
          paginatedProducts.length > 0 &&
          paginatedProducts.map((product: any) => (
            <div
              key={product.id}
              className="bg-neutral-800 rounded-md flex items-center justify-between px-4 py-3"
            >
              <span className="flex gap-x-1">
                <p>{product.id}.</p>
                <h1>{product.title}</h1>
              </span>

              <Image
                src={product.thumbnail}
                height={50}
                width={50}
                alt="image"
              />
            </div>
          ))}
        {loading && error && <div className="text-xl text-orange-600">No Products Found {error}</div>}
      </div>
      {/* pagination btn */}
      <div className="bg-neutral-900/55 px-4 py-2 rounded-sm md:rounded-xl">
        {fetchedData && fetchedData.length > 0 && (
          <div className="flex items-center flex-col my-12 gap-y-12">
            <p className="font-bold text-xl">
              Total Products : {fetchedData.length}
            </p>
            <span className="flex flex-col justify-center items-center flex-wrap gap-4">
              <button
                className="px-4 py-2 rounded-full border border-gray-500 text-gray-300 transition-colors duration-200 hover:bg-neutral-800 disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={prevPage}
                disabled={currentPage === 1} // IMPORTANT: Add disabled state
              >
                Prev
              </button>
              <span className="flex gap-2 flex-wrap justify-center">
                {pageNumbersArray.map((pageNumber) => (
                  <button
                    key={pageNumber}
                    onClick={() => goToPage(pageNumber)}
                    // Ensure consistent sizing and centering for the circular buttons
                    className={`w-10 h-10 text-lg rounded-full flex items-center justify-center transition-all duration-200
                ${
                  pageNumber === currentPage
                    ? "bg-blue-600 text-white font-bold shadow-md shadow-blue-600/50 scale-105" // Active style
                    : "border border-gray-500 text-gray-300 hover:bg-neutral-800" // Inactive style
                }`}
                  >
                    {pageNumber}
                  </button>
                ))}
              </span>

              <button
                onClick={nextPage}
                disabled={currentPage === totalPages} // IMPORTANT: Add disabled state
                className="px-4 py-2 rounded-full border border-gray-500 text-gray-300 transition-colors duration-200 hover:bg-neutral-800 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next
              </button>
            </span>
          </div>
        )}
      </div>
    </main>
  );
}

export default Pagination;
