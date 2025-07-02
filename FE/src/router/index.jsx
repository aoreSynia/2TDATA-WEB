import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import SignUp from "../components/signup.jsx";
import SignIn from "../components/signin.jsx";
import ResetPassword from "../components/ResetPassword.jsx";
import ServiceBySlug from "./ServiceBySlug.jsx";
import LayoutAdmin from "../components/Layout/Admin.jsx";
import { AdminRoute, PrivateRoute } from "./PrivateRoute.jsx";
import BlogList from "../components/admin/Blog/BlogList.jsx";
import BlogForm from "../components/admin/Blog/BlogForm.jsx";
import BlogEdit from "../components/admin/Blog/BlogEdit.jsx";
import AllBlogPage from "../components/Blog/AllBlogPage.js";
import DetailBlogPage from "../components/Blog/DetailBlogPage.js";
import MyService from "../components/MyService.jsx";
import UserInfoList from "../components/admin/UserInfo/UserInfoList.jsx";

import UsersList from "../components/admin/Users/UsersList.jsx";
import UsersForm from "../components/admin/Users/UsersForm.jsx";
import UsersEdit from "../components/admin/Users/UsersEdit.jsx";
import ServiceList from "../components/admin/Service/ServiceList.jsx";
import ServiceForm from "../components/admin/Service/ServiceForm.jsx";
import ServiceEdit from "../components/admin/Service/ServiceEdit.jsx";
import Service from "../components/Service/Service.jsx";
import ServiceUse from "../components/Service/ServiceUse.jsx";
import StatusList from "../components/admin/Status/StatusList.jsx";
import StatusForm from "../components/admin/Status/StatusForm.jsx";
import StatusEdit from "../components/admin/Status/StatusEdit.jsx";
import About from "../components/About.jsx";
import ThankYou from "../components/ThankYou.jsx";
import LayOutUser from "../components/Layout/LayOutUser.jsx";
import UserProfile from "../components/UserProfile/UserProfile.jsx";
import ChangePassword from "../components/UserProfile/ChangePassword.jsx";
import DataPolicy from "../components/PrivacPolicy/DataPolicy.jsx";
import SecurityAndDataPolicy from "../components/PrivacPolicy/SecurityAndDataPolicy.jsx";
import TermsOfService from "../components/PrivacPolicy/TermsOfService.jsx";
import IframeList from "../components/admin/Iframe/IframeList.jsx";
import Ifame from "../components/Iframe/Ifame.jsx";
import OrganizationList from "../components/admin/Organization/OrganizationList.jsx";
import OrgStatusList from "../components/admin/Status/OrgStatusList.jsx";
import UserOrganization from "../components/Organization/UserOrganization.jsx";
import ServiceOrganization from "../components/Organization/ServiceOrganization.jsx";

const Router = () => {
  return (
    <div>
      <Routes>
        <Route>
          <Route index element={<Home />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/logup" element={<SignUp />} />
          <Route path="/rest-password" element={<ResetPassword />} />
          <Route path="/service" element={<Service />} />
          <Route path="about" element={<About />} />
          <Route path="/service/slug/:slug" element={<ServiceBySlug />} />
          <Route path="/service/service-use" element={<ServiceUse />} />
          <Route
            path="/service/my-service"
            element={
              <PrivateRoute>
                <MyService />
              </PrivateRoute>
            }
          />
          <Route path="blogs" element={<AllBlogPage />} />
          <Route path="thankyou" element={<ThankYou />} />
          <Route path="/blogs/:id" element={<DetailBlogPage />} />
          <Route path="/profile" element={<LayOutUser />}>
            <Route index element={<UserProfile />} />
            <Route path="change-password" element={<ChangePassword />} />
            <Route path="organization" element={
              <PrivateRoute>
                <UserOrganization />
              </PrivateRoute>
            } />
            <Route path="organization/services" element={
              <PrivateRoute>
                <ServiceOrganization orgId={null} />
              </PrivateRoute>
            } />
          </Route>
          <Route
            path="/policy/chinh-sach-thu-thap-va-xu-ly-du-lieu-ca-nhan-khach-hang"
            element={<DataPolicy />}
          />
          <Route
            path="/policy/chinh-sach-bao-mat-va-xu-ly-du-lieu-khach-hang"
            element={<SecurityAndDataPolicy />}
          />
          <Route
            path="/policy/dieu-khoan-su-dung-dich-vu"
            element={<TermsOfService />}
          />
          <Route path="/:domain" element={<Ifame />} />
        </Route>

        <Route
          path="/admin"
          element={
            <AdminRoute>
              <LayoutAdmin />
            </AdminRoute>
          }
        >
          <Route path="/admin">
            <Route index element={<UsersList />} />
            <Route path="users/add" element={<UsersForm />} />
            <Route path="users/edit/:id" element={<UsersEdit />} />
          </Route>
          <Route path="blogs">
            <Route index element={<BlogList />} />
            <Route path="add" element={<BlogForm />} />
            <Route path="edit/:id" element={<BlogEdit />} />
          </Route>
          <Route path="services">
            <Route index element={<ServiceList />} />
            <Route path="add" element={<ServiceForm />} />
            <Route path="edit/:id" element={<ServiceEdit />} />
          </Route>
          <Route path="status">
            <Route index element={<StatusList />} />
            <Route path="add" element={<StatusForm />} />
            <Route path="edit/:id" element={<StatusEdit />} />
            <Route path="org-status" element={<OrgStatusList />} />
          </Route>
          <Route path="user-info">
            <Route index element={<UserInfoList />} />
          </Route>
          <Route path="iframe">
            <Route index element={<IframeList />} />
          </Route>
          <Route path="organization">
            <Route index element={<OrganizationList />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};

export default Router;
