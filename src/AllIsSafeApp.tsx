import React from 'react';

import {  Routes, Route } from 'react-router-dom';
import { RolComponent } from "./AllisSafe/components/Rol/RolListComponent";

import { AppRouter } from './routers';
import { AsideScreen,NavScreen,FooterScreen } from './Screens';
import { AuthProvider } from './auth';




export const AllIsSafeApp = () => {

  return (
    <>

    <AuthProvider>
        <AppRouter/>
    </AuthProvider>
{/* <NavScreen />
            <AsideScreen />
            <div className="content-wrapper">
                <div className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1 className="m-0">Dashboard</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item active">Dashboard v1</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="content">
                    <div className="container-fluid">
                        
                        <AppRouter/>
                    </div>
                </section>
            </div>
            <FooterScreen />

         */}

    </>
  )
}