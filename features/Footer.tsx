import Image from "next/image"

export default function Footer() {
  return (
    <div className='bg-black py-40 px-4 lg:px-20 w-full mx-auto lg:py-80 flex flex-col gap-24 lg:flex-row'>
        <div className="2xl:max-w-380 2xl:mx-auto">
            <div className="flex flex-col gap-22">
                <Image src="/icons/PaeLogo.svg" alt="Paenote Logo" width={111} height={24} priority/>
                <div>
                    <p className="font-accent text-neutral-500 text-14">© 2026 Paenote Technologies Limited <br/> All Rights Reserved</p>
                </div>

            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
                <div className="flex flex-col gap-6">
                    <h3 className="text-14 font-medium font-accent">Features</h3>
                    <a href="#" className="text-14 font-medium font-accent text-neutral-300">Invoice</a>
                    <a href="#" className="text-14 font-medium font-accent text-neutral-300">Account payable</a>
                    <a href="#" className="text-14 font-medium font-accent text-neutral-300">Auto Convert</a>
                </div>
                <div className="flex flex-col gap-6">
                    <h3 className="text-14 font-medium font-accent">Company</h3>
                    <a href="#" className="text-14 font-medium font-accent text-neutral-300">About</a>
                    <a href="#" className="text-14 font-medium font-accent text-neutral-300">Privacy Policy</a>
                    <a href="#" className="text-14 font-medium font-accent text-neutral-300">Terms & Conditions</a>
                </div>
                <div className="flex flex-col gap-6">
                    <h3 className="text-14 font-medium font-accent">Resources</h3>
                    <a href="#" className="text-14 font-medium font-accent text-neutral-300">Blog</a>
                    <a href="#" className="text-14 font-medium font-accent text-neutral-300">FAQs</a>
                
                </div>
                <div className="flex flex-col gap-6">
                    <h3 className="text-14 font-medium font-accent">Contact</h3>
                    <p className="text-14 font-medium font-accent text-neutral-300">+234 912 458 1234</p>
                    <a href="#" className="text-14 font-medium font-accent text-neutral-300">support@crane.to</a>
                    <p className="text-14 font-medium font-accent text-neutral-300">12, Tesmot Street, Oklahoma, Thunder Avenue, Lagos</p>
                </div>

            </div>
        </div>

    </div>
  )
}
