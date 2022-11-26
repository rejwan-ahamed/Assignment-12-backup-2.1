import moment from "moment/moment";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { useQuery } from "react-query";
import { AuthContext } from "../Context/MainContext";
import AllSellerTable from "./AllSellerTable";
import BigLoader from "./BigLoader";

const AllSellers = () => {
  const { user } = useContext(AuthContext);
  const [products, setProducts] = useState([]);
  const [productLength, setProductLength] = useState([]);
  const [AD, setADS] = useState(null);
  console.log(user?.email);

  // getting data by react query
  const {
    data: categorys,
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch(`http://localhost:5000/allSellers?accountType=Seller`)
        .then((res) => res.json())
        .then((result) => {
          const length = result.length;
          setProductLength(length);
          setProducts(result);
        }),
  });

  if (isLoading) {
    return <BigLoader></BigLoader>;
  }

  // getting delete id
  const deleteID = (email) => {
    console.log(email);
    fetch(`http://localhost:5000/sellerDelete/${email}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged === true) {
          toast.error("Data deleted");
          refetch();
        }
      });
  };

  // ads
  const Verify = (id) => {
    const sellerUpdateData = {
      sellerID: id,
      verifyStatus: true,
    };

    // /verifyUser
    console.warn(id);
    fetch(`${process.env.REACT_APP_API_URL}/verifyUser/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(sellerUpdateData),
    })
      .then((res) => res.json())
      .then((result) => {
        console.warn(result)
        toast.success("User verified");
      });
  };

  // console.warn(products)

  return (
    <div className="px-4 md:px-10 lg:px-20 xl:px-40">
      <div className="top-section">
        <h1 className="text-2xl font-general font-[600] text-left pt-10">
          Total active sellers{" "}
          <span className="text-orange-500">{productLength}</span>
        </h1>
        <p className="font-general font-[500] mb-3">
          Click to verify and delete seller
        </p>
      </div>
      {products.length === 0 ? (
        <div className="text-section w-full h-screen flex justify-center items-center mt-[-10%]">
          <h1 className="font-general text-4xl text center font-[500]">
            You have added no product yet.
          </h1>
        </div>
      ) : (
        <div className="table-main py-10">
          <div class="overflow-x-auto relative">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-[#F6F7F9] border-b border-gray-200">
                <tr>
                  <th scope="col" class="py-3 px-6">
                    Email
                  </th>
                  <th scope="col" class="py-3 px-6">
                    name
                  </th>
                  <th scope="col" class="py-3 px-6">
                    id
                  </th>
                  <th scope="col" class="py-3 px-6">
                    Verify
                  </th>
                  <th scope="col" class="py-3 px-6">
                    Delete
                  </th>
                </tr>
              </thead>
              <tbody>
                {products.map((data) => (
                  <AllSellerTable
                    key={data._id}
                    products={data}
                    getID={deleteID}
                    verifySeller={Verify}
                  ></AllSellerTable>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* table part start from here */}

      {/* table part start end here */}
    </div>
  );
};

export default AllSellers;
