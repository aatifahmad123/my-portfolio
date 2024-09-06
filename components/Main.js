import Tabs from "./Tabs";
import Image from "next/image";

export default function Main(props) {
  const { children } = props;
  return (
    <main className="flex-1 flex flex-col mt-6">
      <div className="flex-1 flex">
        <aside className="fixed top-[68px] md:top-[76px] left-0 h-full w-8 md:w-12 bg-[#181818] flex flex-col items-center">
          <ul className="flex flex-col items-center h-full gap-6 md:gap-8 mt-2">
            <li>
              <Image
                src="/images/codicon--files.png"
                alt="Icon"
                width={24}
                height={24}
              />
            </li>
            <li>
              <Image
                src="/images/codicon--search.png"
                alt="Icon"
                width={24}
                height={24}
              />
            </li>
            <li>
              <Image
                src="/images/codicon--source-control.png"
                alt="Icon"
                width={24}
                height={24}
              />
            </li>
            <li>
              <Image
                src="/images/codicon--debug-alt.png"
                alt="Icon"
                width={24}
                height={24}
              />
            </li>
            <li>
              <Image
                src="/images/codicon--extensions.png"
                alt="Icon"
                width={24}
                height={24}
              />
            </li>
          </ul>
          <ul className="flex flex-col items-center gap-6 md:gap-8 fixed bottom-7">
            <li>
              <Image
                src="/images/codicon--account.png"
                alt="Icon"
                width={24}
                height={24}
              />
            </li>
            <li>
              <Image
                src="/images/codicon--settings-gear.png"
                alt="Icon"
                width={24}
                height={24}
              />
            </li>
          </ul>
        </aside>

        <div className="w-full">
          <Tabs></Tabs>
          <div className="mt-[77px] md:mt-[86px] ml-8 md:ml-12 bg-slate-600">
            {children}
          </div>
        </div>
      </div>
    </main>
  );
}
