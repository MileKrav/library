import React from "react";
import { useRouter } from "next/router";
import Header from "../../../components/Header";

const Book = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      <Header />
      <div>book: {id}</div>
    </div>
  );
};

export default Book;
