import { ListItem } from '@/utils/types';
import IC_Applicants from '@assets/icons/IC_Applicants';
import IC_Applications from '@assets/icons/IC_Applications';
import IC_Browse from '@assets/icons/IC_Browse';
import IC_CompanyProfile from '@assets/icons/IC_CompanyProfile';
import IC_Dashboard from '@assets/icons/IC_Dashboard';
import IC_HelpCenter from '@assets/icons/IC_HelpCenter';
import IC_Messages from '@assets/icons/IC_Messages';
import IC_Profile from '@assets/icons/IC_Profile';
import IC_Schedule from '@assets/icons/IC_Schedule';
import IC_Search from '@assets/icons/IC_Search';
import IC_Settings from '@assets/icons/IC_Settings';

export default function useDashboardLayout() {
    const menuOptions: ListItem[] = [
        {
            id: 'dashboard',
            name: 'Dashboard',
            icon: <IC_Dashboard />,
        },
        {
            id: 'messages',
            name: 'Messages',
            icon: <IC_Messages />,
        },
        {
            id: 'application',
            name: 'Applications',
            icon: <IC_Applications />,
            category: 'admin',
        },
        {
            id: 'find-job',
            name: 'Find Jobs',
            icon: <IC_Search color="black" />,
            category: 'admin',
        },
        {
            id: 'all-applicants',
            name: 'All Applicants',
            icon: <IC_Applicants />,
            category: 'company',
        },
        {
            id: 'job-listing',
            name: 'Job Listing',
            icon: <IC_Applications />,
            category: 'company',
        },
        {
            id: '',
            name: 'Browse Companies',
            icon: <IC_Browse />,
            category: 'admin',
        },
        {
            id: '',
            name: 'My Profile',
            icon: <IC_Profile />,
            category: 'admin',
        },
        {
            id: '',
            name: 'Company Profile',
            icon: <IC_CompanyProfile />,
            category: 'company',
        },
        {
            id: '',
            name: 'Schedule',
            icon: <IC_Schedule />,
            category: 'company',
        },
    ];

    const subMenuOptions: ListItem[] = [
        {
            id: '',
            name: 'Help Center',
            icon: <IC_HelpCenter />,
        },
        {
            id: '',
            name: 'Settings',
            icon: <IC_Settings />,
        },
    ];

    return {
        menuOptions,
        subMenuOptions,
    };
}
