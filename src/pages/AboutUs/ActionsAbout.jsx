import React from "react";

const ActionsAbout = () => {
  return (
    <section
      id="features"
      class="px-2 space-y-6 py-8 md:py-12 lg:py-24 max-w-5xl mx-auto"
    >
      <div class="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 class="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-4xl">
          Start Your Local Shopping Journey
        </h2>
        <p class="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Start shopping today and experience the best of what your neighborhood
          has to offer."
        </p>
      </div>
      <div class="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
        <div class="relative overflow-hidden rounded-lg border bg-gray-100/50 p-2">
          <div class="flex h-[180px] flex-col justify-between rounded-md p-6">
            <div class="space-y-2">
              <h3 class="font-bold">Discover</h3>
              <p class="text-md text-muted-foreground">
                "Shop local, make an impact. Start browsing now and find the
                best your community has to offer!"
              </p>
            </div>
          </div>
        </div>
        <div class="relative overflow-hidden rounded-lg border bg-gray-100/50 p-2">
          <div class="flex h-[180px] flex-col justify-between rounded-md p-6">
            <div class="space-y-2">
              <h3 class="font-bold">Support</h3>
              <p class="text-md text-muted-foreground">
                "Ready to support your neighborhood stores? Sign up today and
                explore exclusive local deals!"
              </p>
            </div>
          </div>
        </div>
        <div class="relative overflow-hidden rounded-lg border bg-gray-100/50 p-2">
          <div class="flex h-[180px] flex-col justify-between rounded-md p-6">
            <div class="space-y-2">
              <h3 class="font-bold">Experience</h3>
              <p class="text-md text-muted-foreground">
                "Experience the convenience of local shopping. Log in and begin
                your journey through your community’s finest offerings!"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActionsAbout;
