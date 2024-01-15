import Categories from "@/components/Categories";
import SearchInput from "@/components/SearchInput";
import Companions from "@/components/Companions";
import prismaDb from "@/lib/prismaDb";

interface RootPageProps {
  searchParams: {
    categoryId: string;
    name: string;
  };
};

const RootPage = async ({searchParams}: RootPageProps) => {
  const data = await prismaDb.companion.findMany({
    where: {
      categoryId: searchParams.categoryId,
      name: {
        search: searchParams.name,
      },
    },
    orderBy: {
      createdAt: "desc"
    },
    include: {
      _count: {
        select: {
          messages : true
        }
      }
    },
  });

  const categories = await prismaDb.category.findMany();

  return (
    <div className="space-y-2">
      <SearchInput  />
      <Categories categories={categories} />
      <Companions data={data} />
      
    </div>
  );
};

export default RootPage;
