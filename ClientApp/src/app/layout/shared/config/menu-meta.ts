import { MenuItem } from '../models/menu.model';
import { fa } from 'src/app/shared/readModel/fontAwesomeConstants';

// menu items for vertcal and detached layout
const MENU_ITEMS: MenuItem[] = [
    {
        key: 'dashboard',
        label: 'Dashboard',
        isTitle: false,
        icon: fa.faObjectsColumn,
        link: '/dashboard/report',
        isMainParent: true,
        invertIcon: false
    },
    {
        key: 'batches',
        label: 'Batches',
        isTitle: false,
        icon: fa.faLayerGroup,
        collapsed: true,
        invertIcon: false,
        children: [
            {
                key: 'batch_status',
                label: 'Batch Status',
                link: '/batches/batch-status',
                parentKey: 'batches',
            },
            {
                key: 'mtp_file_status',
                label: 'MTP file status',
                link: '/batches/mtp-file-status',
                parentKey: 'batches',
            }
        ]
    },
    {
        key: 'companies_security_users',
        label: 'Companies, Security & Users',
        isTitle: false,
        icon: fa.faUserShield,
        collapsed: true,
        invertIcon: false,
        children: [
            {
                key: 'companies',
                label: 'Companies',
                link: '/company/companies',
                parentKey: 'companies_security_users',
            },
            {
                key: 'security',
                label: 'Security',
                link: '/company/security',
                parentKey: 'companies_security_users',
            },
            {
                key: 'syastem-users',
                label: 'System Users',
                link: '/company/system-users',
                parentKey: 'companies_security_users',
            }
        ],
    },
    {
        key: 'natures_call_types_priorities',
        label: 'Natures, Call types & Priorities',
        isTitle: false,
        icon: fa.faPhonePlus,
        collapsed: true,
        invertIcon: false,
        children: [
        ],
    },
    {
        key: 'crews_vehicles_units',
        label: 'Crews, Vehicles & Units',
        isTitle: false,
        icon: fa.faUsers,
        collapsed: true,
        invertIcon: false,
        children: [
        ],
    },
    {
        key: 'call_taking',
        label: 'Call Taking',
        isTitle: false,
        icon: fa.faPhone,
        collapsed: true,
        invertIcon: false,
        children: [
        ],
    },
    {
        key: 'dispatching',
        label: 'Dispatching',
        isTitle: false,
        icon: fa.faFlipTruck,
        collapsed: true,
        invertIcon: false,
        children: [
        ],
    },
    {
        key: 'billing',
        label: 'Billing',
        isTitle: false,
        icon: fa.faFiles,
        collapsed: true,
        invertIcon: false,
        children: [
        ],
    },
    {
        key: 'advanced',
        label: 'Advanced',
        isTitle: false,
        icon: fa.faGrid2,
        collapsed: true,
        invertIcon: false,
        children: [
        ],
    }
];


export { MENU_ITEMS };
