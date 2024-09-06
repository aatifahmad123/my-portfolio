import Image from "next/image";

export default function Footer() {
  return (
    <div className="fixed bottom-0 bg-[#181818] text-[#D4D4D4] w-full">
      <ul className="flex">
        <li className="bg-blue-500 px-2 flex justify-center items-center">
          <Image
            src="/images/codicon--remote.png"
            alt="Icon"
            width={18}
            height={18}
          />
        </li>
        <li className="flex justify-center items-center px-2">
          <Image
            src="/images/codicon--source-control.png"
            alt="Icon"
            width={16}
            height={16}
          />
        </li>
        <li className="text-sm flex justify-center items-center">main</li>
        <li className="flex justify-center items-center px-2">
          <Image
            src="/images/codicon--cloud-upload.png"
            alt="Icon"
            width={16}
            height={16}
          />
        </li>
        <li className="flex justify-center items-center px-1">
          <Image
            src="/images/system-uicons--cross-circle.png"
            alt="Icon"
            width={16}
            height={16}
          />
        </li>
        <li className="flex justify-center items-center text-sm">0</li>
        <li className="flex justify-center items-center px-1">
          <Image
            src="/images/codicon--warning.png"
            alt="Icon"
            width={16}
            height={16}
          />
        </li>
        <li className="flex justify-center items-center text-sm">0</li>
        <li className="flex justify-center items-center pl-2">
          <Image
            src="/images/codicon--radio-tower.png"
            alt="Icon"
            width={16}
            height={16}
          />
        </li>
        <li className="flex justify-center items-center text-sm pl-1">0</li>
        <div className="hidden md:flex absolute right-[5px]">
          <ul className="flex">
            <li className="flex justify-center items-center text-sm px-3">
              Ln 61,Col 30
            </li>
            <li className="flex justify-center items-center text-sm">
              Spaces: 4
            </li>
            <li className="flex justify-center items-center text-sm px-3">
              UTF-8
            </li>
            <li className="flex justify-center items-center text-sm">LF</li>
            <li className="flex justify-center items-center px-3">
              <Image
                src="/images/uil--brackets-curly.png"
                alt="Icon"
                width={14}
                height={14}
              />
            </li>
            <li className="flex justify-center items-center text-sm pr-3">
              Javascript
            </li>
            <li className="flex justify-center items-center">
              <Image
                src="/images/fluent--live-24-regular.png"
                alt="Icon"
                width={16}
                height={16}
              />
            </li>
            <li className="flex justify-center items-center text-sm pl-1 pr-3">
              Go Live
            </li>
            <li className="flex justify-center items-center">
              <Image
                src="/images/hugeicons--tick-double-02.png"
                alt="Icon"
                width={16}
                height={16}
              />
            </li>
            <li className="flex justify-center items-center text-sm pl-1 pr-4">
              Prettier
            </li>
            <li className="flex justify-center items-center">
              <Image
                src="/images/codicon--bell.png"
                alt="Icon"
                width={16}
                height={16}
              />
            </li>
          </ul>
        </div>
      </ul>
    </div>
  );
}
