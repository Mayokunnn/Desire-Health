import { Filter } from "../../components/AppLayout/Filter";
import ResourcePreview from "./ResourcePreview";

const opts = [
  { label: "Trending", value: "trending" },
  { label: "Articles", value: "article" },
  { label: "Videos", value: "video" },
];

export const Resources = () => {

  

  return (
    <div className="grid grid-rows-[auto_1fr] gap-6">
      <div className="flex justify-center">
        <Filter filterField={"type"} options={opts} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ResourcePreview />
        <ResourcePreview />
        <ResourcePreview />
        <ResourcePreview />
        <ResourcePreview />
      </div>
    </div>
  );
};
