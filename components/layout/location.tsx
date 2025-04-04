import Image from "next/image";
import { AspectRatio } from "../ui/aspect-ratio";

export default function Location() {
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col items-center justify-center gap-4 py-15">
        <div className="text-primary scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl">
          ĐỊA ĐIỂM TỔ CHỨC
        </div>
        <div className="text-primary">————— ♦ —————</div>
        <p className="pb-8 text-center text-sm leading-none font-medium">
          Bạn cần thêm thông tin, hãy liên hệ với chúng tôi.
        </p>
        <div className="flex flex-col items-center justify-center gap-4">
          <p className="text-primary text-center text-xl font-bold">
            Trường Cao Đẳng Hậu Cần 2
          </p>

          <p>50 Lê Văn Việt, Hiệp Phú, Thủ Đức, Hồ Chí Minh, Việt Nam</p>
        </div>
        <div className="flex w-full flex-col-reverse gap-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.5439019285222!2d106.77506797420703!3d10.846173857905043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175270c3865c273%3A0x3e361dab0a829fb5!2zVHLGsOG7nW5nIENhbyDEkOG6s25nIEjhuq11IEPhuqduIDI!5e0!3m2!1svi!2s!4v1743788955976!5m2!1svi!2s"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            height={400}
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className="gap-4 overflow-hidden md:flex md:h-[400px]">
            <div className="mb-4 max-h-[416px] w-full overflow-hidden md:mb-0">
              <AspectRatio ratio={1 / 1}>
                <Image
                  src={"/img5.jpg"}
                  alt=""
                  fill
                  className="max-h-[400px] w-full object-cover"
                />
              </AspectRatio>
            </div>
            <div className="mb-4 max-h-[416px] w-full overflow-hidden md:mb-0">
              <AspectRatio ratio={1 / 1}>
                <Image
                  src={"/img6.jpeg"}
                  alt=""
                  fill
                  className="max-h-[400px] w-full object-cover"
                />
              </AspectRatio>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
