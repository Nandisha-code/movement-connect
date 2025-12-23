/**
 * Organization Layout Component
 * Wraps organization-specific pages with navbar and footer
 * Handles dynamic data loading based on organization ID
 */

import { Outlet, useParams, Navigate } from 'react-router-dom';
import { getOrganizationData } from '../data/organizationData';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const OrganizationLayout = () => {
  const { orgId } = useParams();
  
  // Validate organization ID
  if (orgId !== 'aisf' && orgId !== 'aiyf') {
    return <Navigate to="/aisf" replace />;
  }

  const organization = getOrganizationData(orgId);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar organization={organization} />
      <div className="flex-grow">
        <Outlet context={{ organization }} />
      </div>
      <Footer organization={organization} />
    </div>
  );
};

export default OrganizationLayout;
