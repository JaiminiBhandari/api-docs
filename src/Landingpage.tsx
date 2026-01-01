import { Button, Head, Link, Typography } from "zudoku/components";

export const Landingpage = () => {
  return (
    <section>
      <Head>
        <title>Home</title>
      </Head>
      <div className="grid gap-10 pb-8 lg:grid-cols-12 lg:gap-12 lg:py-16">
        <div className="col-span-full mt-10 mr-auto lg:col-span-8 lg:mt-0">
          <h1 className="mb-10 text-4xl leading-none font-extrabold tracking-tight md:text-5xl xl:text-6xl">
            Transfer money anywhere in the{" "}
            <span className="bg-primary text-primary-foreground inline-block -rotate-1 rounded-3xl px-2.5 py-1.5">
              whole world
            </span>
          </h1>
          <Typography className="max-w-full">
            <p>
              ARP Digital is your gateway to seamless global finance.
              Whether you're sending money across borders or orchestrating
              high-volume settlements between continents, our platform gives you
              cosmic-scale control over financial movement. With real-time
              tracking, intelligent routing, and secure transaction pipelines,
              ARP Digital empowers your applications to move value as
              effortlessly as light travels through space.
            </p>
            <p>
              Join organizations across the globe who rely on ARP Digital for
              dependable, high-velocity financial operations. From simple
              remittances to complex multi-currency flows, our APIs provide
              everything you need to power the next generation of financial
              connectivity.
            </p>
          </Typography>
          <div className="mt-6 flex items-center gap-4">
            <Button variant="outline" size="xl" asChild>
              <Link
                to="/api-reference"
                // target="_blank"
                // rel="noopener noreferrer"
              >
                Explore ARP Digital
              </Link>
            </Button>
            <span className="font-semibold">or</span>
            <Button size="xl" asChild>
              <Link to="/getting-started">Get started</Link>
            </Button>
          </div>
        </div>
        <img
          src="/content.png"
          className="hidden w-full max-w-[330px] rounded-3xl drop-shadow-lg lg:col-span-4 lg:mt-0 lg:flex dark:drop-shadow-none"
          alt="Transfer bitcoins illustration"
        />
      </div>
    </section>
  );
};
