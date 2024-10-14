import { CheckCircle } from 'lucide-react';
import Image from 'next/image';

export default function LandingPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-900 to-purple-900 text-white p-6">

            <header className="flex justify-between items-start mb-12">
                <div className="flex items-center space-x-3">
                    <Image
                        src="https://s3-alpha-sig.figma.com/img/bebf/21c0/077e2d9cc773085171cd6874b8d1c52e?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QOHNIz1lEidarxB8oR736CLv4dq7AhGB-pMAuID2Alfk2WoS-afyIkpZsrOORxJFEwVBh1HVvVkh4~jKOtMxo44Qxrx6XJwgGn9RNpwIMVI1Niv2tPh3g23~6gVeIb2wng6MD6U4i0tdnS-msYl7ccNoW3oORUGLNLIwhYante1DnacXdG5POdbRBlbLcFKF~JRykueeiwxw7HM2iNh0kvFzd8xyOdjIz4gnKLGsw8uu~fKsIz67civN3BjBz3d3nQt3c0clsT4ZTb3L3p~iO3LhMMl91qTxwYeQqhywxMHBzAWjcmqdaHBaCn3RlbPLj-MjuUDyGZmEj2SfMXk1VQ__"
                        alt="Logo"
                        width={40}
                        height={40}
                        className="rounded-full"
                    />
                    <span className="text-3xl font-bold">UIHUT</span>
                </div>

                <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-4">
                        <span className="text-lg">Black Friday Deal</span>
                        <div className="bg-orange-500 text-white px-5 py-2 rounded-full">07 Days Left</div>
                    </div>
                </div>
            </header>


            <main className="flex flex-col lg:flex-row justify-between items-start relative -mt-2">

                <div className="lg:w-1/2 mb-8 lg:mb-0">
                    <h1 className="text-5xl font-extrabold mb-2 leading-tight tracking-tight">
                        Social Media
                        <br />
                        Web App UI KIT
                    </h1>

                    <ul className="space-y-4 mb-8 text-lg">
                        {['Icon Library Included', 'Complete UI Element', 'Dark mode Ready', 'All Meaningful Content'].map(
                            (feature, index) => (
                                <li key={index} className="flex items-center space-x-3">
                                    <CheckCircle className="text-blue-400" />
                                    <span>{feature}</span>
                                </li>
                            )
                        )}
                    </ul>

                    <div
                        className="absolute"
                        style={{
                            width: '350px',
                            height: '625px',
                            top: '85px',
                            left: '230px',
                            transform: 'translateX(0)',
                        }}
                    >
                        <Image
                            src="/Home page 2.png"
                            alt="Image Below KIT"
                            width={800}
                            height={800}
                            className="rounded-lg object-contain"
                        />
                    </div>

                    <div className="relative mb-5 pt-40">
                        <span
                            className="text-4xl font-bold"
                            style={{
                                fontFamily: 'Roboto',
                                fontSize: '42px',
                                lineHeight: '49.22px',
                                marginTop: '150px',
                            }}
                        >
                            180+ Pages
                        </span>
                    </div>

                    <div className="relative mb-8 flex justify-start space-x-2">
                        <Image
                            src="https://s3-alpha-sig.figma.com/img/9088/9505/d285489fc3f6783699633b1b56c7d140?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CDJlO6NzMVyU2RNpIaOgnljWfLtTvQySgZeOKcNkBsTyqTLETUqMa7e-lIp46rDOO21U-Ay-CRARqMaghIebK2LmmFioYvIUOx9kzhPOI18jytQPdAMgoyPyqmIbAHeL9jBDa4MqRwDTBJWqh1JdW5gusQmwmlYzRGm-9RSrTMiNRNVGCcCs9joUsase~vMYDXYdSN1-DQOoVI8h3nk9tYtPR6sSNGYdwcXk4N2Y4GEH~qr0IARi0JriC9E7zEf72bqZ~7rGfBuMlyaL2GAAAESnCU64kKurNVzY806P7hOWd~5avpNEZpRQ-ZwYJqpi4gGTi5eBMFjx90KbRx5Wvg__"
                            alt="First Image"
                            width={47}
                            height={60}
                            className="object-contain"
                        />
                        <Image
                            src="https://s3-alpha-sig.figma.com/img/eea0/ef17/d564755584383ef22025f15a431df2b6?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kaIB6xrZoA3vE4mY5sWYjk0zM2AtGNRtIFEeT8yZq9FvsSSoPzOY3D2GfBwQMxckgsm30Q6eoibT4q6QKa5ISFkF9i4HXPBzXEIHdnoBEv~6zraM1oi8lbjaoNo32KPKUxLVLP-8fZF3AtdqM8e6q6axHCT40gSiNzXvSdaBQ~mJ8EgSSnzuwIDmyZFq4wjVxw7kaXXDX-3AOpDbYhYo6qPPA5XPbe1YZrBsHBdPBzrJGK97cYcqsajwd2HYJxPR2G8qR-G3pTlzywBahrxshDhkIQ8rDTraaxP1G-dUQbapcjTkWJ09t8l-iZCZporSROcPPnweW4ZB1GaeXJqTuQ__"
                            alt="Second Image"
                            width={70}
                            height={63}
                            className="object-contain"
                        />
                        <Image
                            src="https://s3-alpha-sig.figma.com/img/48cb/4e0f/d3fda1ca91dee59e805d7ce8ee8b7334?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=L-DANLiB8RG5uc3rbfHyN~cULtck4mUp0Ar9rhJaQOPYEWXUxjqX4BEQgMFzl2sCXUTJ0KNm96zwN-cLe8rYVrX~ocMXUgxRFlST0xzeew4ibXB7kI4c64pB~4R0Wuv6vCxwlQ7paAME7NRTkwcSVlvF4MMxKISYRFJAPnUdj4f5QUJvVyeBD4NV6OvNE88LnK5V6TNBX7B2SBG6zAetAhmtEzibKUlumHlO8cokwT51RzraiQYZ8F8xK-TJSRjfyQrW2OSTTuq13gHiA7jIQVauIfogLVifdunS98apF8mAMA5UMFr5r9AzZ7THG~0s~yKlAZi7v-mn8A5rORYm4A__"
                            alt="Third Image"
                            width={70}
                            height={63}
                            className="object-contain"
                        />
                    </div>
                </div>


                <div className="lg:w-1/2 text-right relative">

                    <div className="flex justify-end absolute top-[-40px] right-[160px]">
                        <Image
                            src="/Vector 2.png"
                            alt="Black Friday Image"
                            width={100}
                            height={100}
                            className="object-contain ml-2"
                        />
                    </div>

                    <div className="flex justify-end absolute top-[30px] right-[-10px]">
                        <Image
                            src="/yolo.png"
                            alt="Second Image"
                            width={300}
                            height={257}
                            className="object-contain ml-8"
                        />
                    </div>
                </div>




            </main>

        </div>
    );
}
