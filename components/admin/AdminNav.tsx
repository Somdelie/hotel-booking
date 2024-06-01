"use client";
import { Package } from "lucide-react";
import Link from "next/link";

const AdminNav = () => {
  return (
    <div className="mt-4">
      <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
        <Link
          href="#"
          className="flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary"
        >
          <Package className="h-4 w-4" />
          Hotels{" "}
        </Link>
      </nav>
    </div>
  );
};

export default AdminNav;
