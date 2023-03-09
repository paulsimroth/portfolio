import Image from 'next/image';
import Footer from 'src/sections/Footer';
import Navbar from 'src/sections/Navbar';
import secret from "./secret.json";

export default function Home() {
  
  const name = secret.name;
  const address = secret.address;
  const city = secret.city;
  const phone = secret.phone;
  const email = secret.mail;

  return (
    <main className='overflow-hidden'>
      <Navbar />
      <div className='p-12 relative'>
            <div className='text-[#18BC9C]'>
                <h1 className="font-extrabold my-8 text-[25px] md:text-[30px] lg:text-[45px] leading-[30px] text-[#18BC9C]">IMPRINT.</h1>

                <h2 className="font-extrabold my-8 text-[23px] md:text-[26px] lg:text-[45px] leading-[30px] text-[#18BC9C]">Publisher and media owner:</h2>
                <p>{name}</p>
                <p>{address}</p>
                <p>{city}</p>

                <h2 className="font-extrabold my-8 text-[23px] md:text-[26px] lg:text-[45px] leading-[30px] text-[#18BC9C]">Contact</h2>
                <p>Telephone: {phone}</p>
                <p>E-Mail: {email}</p>
                <br/>
                <p>Responsible for content: {name}</p>
                <p>Disclosure requirement under § 25 of the Austrian Media Act (Mediengesetz, MedienG).</p>

                <h2 className="font-extrabold my-8 text-[23px] md:text-[26px] lg:text-[45px] leading-[30px] text-[#18BC9C]">Basic Direction:</h2>
                <p className='my-4 text-justify'>This website is the personal website of Paul Simroth. It is used for showcasing the work of the publisher and to provide an opportunity for contact and collaboration.</p>
                <h2 className="font-extrabold my-8 text-[23px] md:text-[26px] lg:text-[45px] leading-[30px] text-[#18BC9C]">Please note:</h2>
                <p className='my-4 text-justify'>
                    The content  offered here is for general information.Referrals and links to other internet offers have been carefully selected. 
                    However, their content, accuracy, timeliness, completeness and availability are not within my sphere of influence and I do not assume any guarantee/liability for this.
                </p>
                <p className='my-4 text-justify'>
                    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, 
                    INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. 
                    IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, 
                    WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, 
                    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
                </p>
                <br/>
                <p>Last update: 21.11.2022</p>
                
            </div>
        </div>
      <Footer />
    </main>
  )
};
