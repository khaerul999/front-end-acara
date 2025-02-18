import {CiGrid41, CiSettings, CiWallet, CiViewList, CiShoppingTag, CiBookmark} from "react-icons/ci"



const SIDEBAR_ADMIN = [
    {
        key: "dashboard",
        label: "Dashboad",
        href: "/admin",
        icon: <CiGrid41 />
    },
    {
        key: "event",
        label: "Event",
        href: "/admin/event",
        icon: <CiViewList />
    },
    {
        key: "category",
        label: "Category",
        href: "/admin/category",
        icon: <CiShoppingTag />
    },
    {
        key: "banner",
        label: "Banner",
        href: "/admin/banner",
        icon: <CiBookmark />
    },
    {
        key: "transaction",
        label: "Transaction",
        href: "/admin/transaction",
        icon: <CiWallet />
    },
    {
        key: "setting",
        label: "Setting",
        href: "/admin/setting",
        icon: <CiSettings />
    },

]


const SIDEBAR_MEMBER = [
    {
        key: "dashboard",
        label: "Dashboad",
        href: "/member",
        icon: <CiGrid41 />
    },
    {
        key: "transaction",
        label: "Transaction",
        href: "/member/transaction",
        icon: <CiWallet />
    },
    {
        key: "setting",
        label: "Setting",
        href: "/member/setting",
        icon: <CiSettings />
    },

]



export {SIDEBAR_ADMIN, SIDEBAR_MEMBER};