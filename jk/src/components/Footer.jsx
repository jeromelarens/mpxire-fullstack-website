export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
        
        <div>
          <h3 className="font-semibold text-lg mb-2">MPXIRE</h3>
          <p className="text-gray-400">
            Building websites and promoting businesses to generate real results.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Services</h4>
          <ul className="text-gray-400 space-y-1">
            <li>Website Development</li>
            <li>App Development</li>
            <li>Digital Marketing</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Contact</h4>
          <p className="text-gray-400">Phone / WhatsApp: +91 XXXXX XXXXX</p>
          <p className="text-gray-400">Email: contact@mpxire.com</p>
        </div>

      </div>

      <p className="text-center text-gray-500 mt-8 text-sm">
        © {new Date().getFullYear()} MPXIRE. All rights reserved.
      </p>
    </footer>
  );
}