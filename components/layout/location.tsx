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
            Trường Đại học Bách khoa, ĐHQG-HCM
          </p>
          <p className="text-center">
            Sân thi đấu chính thức của Hội thi <br />
            là sân bóng của Trường Đại học Bách khoa, ĐHQG-HCM
          </p>
          <p>
            Số 268, đường Lý Thường Kiệt, Phường 14, Quận 10, Thành phố Hồ Chí
            Minh
          </p>
        </div>
        <div className="flex w-full flex-col-reverse gap-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7839.009024223357!2d106.659337!3d10.772618!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ec3d2692625%3A0xf19953e7c2512d3a!2zSENNVVQgRm9vdGJhbGwgRmllbGQsIFBoxrDhu51uZyAxNCwgUXXhuq1uIDEwLCBI4buTIENow60gTWluaCwgVmlldG5hbQ!5e0!3m2!1sen!2sus!4v1743538492479!5m2!1sen!2sus"
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
