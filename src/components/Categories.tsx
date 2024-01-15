"use client";

import { cn } from "@/lib/utils";
import { Category } from "@prisma/client";
import { useRouter, useSearchParams } from "next/navigation";
import qs from "query-string";

interface CategoriesProps {
  categories: Category[];
}

const filterButtonClass = `flex items-center text-center text-xs md:text-sm px-2 md:px-4 py-2 md:py-3 rounded-md bg-primary/20 hover:opacity-85 transition`

const Categories: React.FC<CategoriesProps> = ({ categories }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const categoryId = searchParams.get("categoryId");

  const onClick = (id : string | undefined) => {
    const query = {categoryId : id};
    const url = qs.stringifyUrl({
      url : window.location.href,
      query
    }, {skipEmptyString : true, skipNull : true});

    router.push(url)
  }
  return (
    <div className="w-full overflow-x-auto gap-x-2 flex p-1">
      <button
        onClick={() => onClick(undefined)}
        className={cn(filterButtonClass, {
          "bg-primary/50" : !categoryId,
        })}
      >
        Newest
      </button>

      {categories.map((item) => (
        <button
          key={item.id}
          onClick={() => onClick(item.id)}
          className={cn(filterButtonClass, {
            "bg-primary/50" : item.id === categoryId
          }
          )}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
};

export default Categories;
