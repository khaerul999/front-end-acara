import PageHead from "@/components/commons/PageHead";
import { ReactNode, useState } from "react";
import DashboardLayoutSidebar from "./DashboardLayoutSidebar";
import { SIDEBAR_ADMIN, SIDEBAR_MEMBER } from "./DashboardLayout.constans";
import { Navbar, NavbarMenuToggle } from "@heroui/react";
import { CiMenuBurger  } from "react-icons/ci";
import { RiMenuUnfold3Line, RiMenuUnfold4Line  } from "react-icons/ri";




interface PropTypes {
  children: ReactNode;
  description: string;
  title?: string;
  type: string;
}

const DashboardLayout = (props: PropTypes) => {
  const { children, description, title, type = "admin" } = props;
  const [open, setOpen] = useState(false);

  console.log("isOpen after toggle:", !open);

  return (
    <>
      <PageHead title={title} />
      <div className="max-w-screen-3xl 3xl:container flex">
        <DashboardLayoutSidebar
          sidebarItems={type === "admin" ? SIDEBAR_ADMIN : SIDEBAR_MEMBER}
          isOpen={open}
        />
        <div className="h-screen w-full overflow-y-auto p-8">
          <Navbar
            className="flex justify-between bg-transparent px-0"
            isBlurred={false}
            position="static"
            classNames={{ wrapper: "p-0" }}
          >
            <h1 className="text-3xl font-bold">{title}</h1>

            <button
              aria-label={open ? "Close Menu" : "Open Menu"}
              onClick={() => setOpen(!open)}
              className=" lg:hidden flex justify-center"
            >
                {open ? <RiMenuUnfold4Line  className="h-7 w-7"/> : <RiMenuUnfold3Line  className="h-7 w-7"/> }
                
            </button>
          </Navbar>
          <p className="mb-4 text-small">{description}</p>
          {children}
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
