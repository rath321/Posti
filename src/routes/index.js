import { lazy } from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";

import CreateForm from "../components/create-edit/createForm";
import PostList from "../components/post-view/postList";
import ViewList from "../components/post-view/listView";
const ListViewComponent=lazy(()=>import("../components/post-view/listView"))
const CreateFormComponent=lazy(()=>import ("../components/create-edit/createForm"))
// const HomeComponent = lazy(() => import("../components/home/HomeComponent"));
// const AboutComponent = lazy(() => import("../components/about/AboutComponent"));
// const CounterComponent = lazy(() => import("../components/counter/CounterComponent"));
// const ProductsComponent = lazy(() => import("../components/products/ProductsComponent"));
// const ManageProductComponent = lazy(() => import("../components/products/ManageProductComponent"));

export default (
   
        <Routes>
            <Route path="/" element={<ListViewComponent />} />
            <Route path="/create" element={<CreateFormComponent />} />
            {/* <Route path="/" element={<ListViewComponent />}>
                <Route path="" element={<ProductNotSelectedComponent />} />
                <Route path=":productId" element={<ProductDetailsComponent data={productsData} />} />
            </Route> */}
            {/* <Route path="/about" element={<AboutComponent />} />
            <Route path="/counter" element={<CounterComponent />} />
            <Route path="/products" element={<ProductsComponent />} />
            <Route path="/product/:id" element={<ManageProductComponent />} />
            <Route path="/product" element={<ManageProductComponent />} />
            <Route path="*" element={<NoMatch />} /> */}
        </Routes>
);

// function NoMatch() {
//     let location = useLocation();

//     return (
//         <div className="text-center">
//             <article>
//                 <h1 className="text-danger">No match found for <code>{location.pathname}</code></h1>
//                 <h4 className="text-danger">Please check your Route Configuration</h4>
//                 <div className="mt-5">
//                     <img src={img404} alt="Not Found" className="rounded" />
//                 </div>
//                 <h2 className="mt-5">
//                     <Link className="nav-link" to="/">Back to Home</Link>
//                 </h2>
//             </article>
//         </div>
//     );
// }