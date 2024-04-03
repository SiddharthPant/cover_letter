import {Card, CardTitle, CardContent} from "~/components/ui/card";
import Link from "next/link";


export default function HomePage() {
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-tr from-violet-500 to-orange-300 text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
          Siddharth <span className="text-gray-800">Pant</span>
        </h1>
        <Card
          className="shadow-card-foreground p-8 border-red-200 bg-white bg-opacity-60">
          <CardTitle className="text-center">
            Cover Letter
          </CardTitle>
          <CardContent className="p-8">
            <p>Hi Adam and team,</p>
            <br/>
            <p>I came to know about the opportunity from one of the podcasts “Mostly Technical” that you were in and I
              am very excited to be able to get in front of your attention. I am an <strong>8-year
                experienced</strong> tech enthusiast
              who has professionally worked for both big enterprises and small early-age startups. For other businesses
              and my business. Projects that were legacy to projects that are greenfield. Due to this, I have <strong>a
                lot of 0
                to 1 and 1 to 100 experiences</strong> which I feel I bring with me if I become part of your team. In
              all of this,
              I wore multiple hats. Sometimes I was a backend developer, other times I updated UI code to add buttons to
              forms and also worked on <strong>CI/CD pipelines</strong> for the code to get deployed to production.</p>
            <br/>
            <p>I live in Mumbai, India. I know you posted for CET and EST time zones. I already work for another US
              project (Big Pharma J&J R&D) on a remote contract, so working EST is not new for me.</p>
            <br/>
            <p>I know how challenging it is to keep getting one novel problem and another that your team must constantly
              delve into. I have also constantly faced this and tried to find solutions. Many times facing situations
              where no one else knew what to take care of, at those moments I took the initiative to <strong>take on the
                hard
                problems and give help and direction to team members.</strong> Where necessary creating <strong>technical
                documentation</strong> as well that have been praised
              by team members for their utility(and the humour I include in them).</p>
            <br/>
            <p>Since childhood, I opened my toys and tried to find what was inside and how were they working. Today the
              toys are the open-source software that I use and the habit is to open them and see the internals.</p>
            <br/>
            <p>I am also <strong>leading teams in my current US project</strong>, so I have experience moving things
              ahead with people.
              Yes, that&apos;s in a corporate setting which is different than pulling strings of 3rd party open source
              projects but I think I have experience that can help there.</p>
            <br/>
            <p>One thing that I liked in your job description is the mention of purpose, that you have resources but you
              still hire less. To me, that&apos;s an indication of the high regard you guys have for your work, and
              it&apos;s
              similar to my mindset as well when I have formed teams.</p>
            <br/>
            <p>I will end the letter by highlighting that I have taken risks early on in my career by trying to run my
              own
              service business after just 1.5 years of experience, that journey has given me many challenges that give
              me my confidence
              so that I can face challenges for you as well and be part of tailwindcss&apos;s</p>
            <br/>
            <p>Looking forward for further communication with you and your team.</p>
            <br/>
            <p>Regards,</p>
            <p>Siddharth Pant</p>
            <Link href="https://siddharthpant.com/" target="_blank"
                  className="text-blue-900">https://siddharthpant.com/</Link>

            <br/>
            <br/>
            <p><strong>PS:</strong> Thought it will be cool to spin up a quick page in an hour, play with gradients and
              use tailwindcss to send letter to tailwindcss 😉. <Link
                href="https://github.com/SiddharthPant/cover_letter" target="_blank" className="text-blue-900">Repo is
                here for reference.</Link></p>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}