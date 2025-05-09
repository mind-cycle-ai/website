import Image from 'next/image'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { COMPANY_NAME, DESCRIPTION } from '@/constants'

import image1 from '@/images/photos/image-4.png'
import image2 from '@/images/photos/image-1.png'
import image3 from '@/images/photos/image-2.png'
import image4 from '@/images/photos/image-5.png'
import image5 from '@/images/photos/image-4.png'

function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']
  let animations = [
    'animate-float',
    'animate-pulse-slow',
    'animate-drift',
    'animate-pulse-slow',
    'animate-float',
  ]

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[image1, image2, image3, image4, image5].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-9/10 w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800',
              rotations[imageIndex % rotations.length],
              animations[imageIndex % animations.length],
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default async function Home() {
  return (
    <>
      <Container className="mx-12 mt-9">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            {DESCRIPTION}
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            {COMPANY_NAME} builds AI systems that extract grounded, verifiable
            answers from complex public and technical documents. Our platform
            combines semantic search, hierarchical embeddings, and
            citation-aware retrieval to surface precise insights from dense
            regulations, manuals, and standards. Whether applied to military
            doctrine or construction specs, {COMPANY_NAME} enables faster
            decision-making, deeper understanding, and total transparency — with
            every answer traceable back to its source.
          </p>
        </div>
      </Container>

      <Photos />

      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-1">
          <div className="lg:pl-16">
            <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
              <h2 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
                {COMPANY_NAME}
              </h2>
              <ul className="mt-6 space-y-4">
                <li className="flex gap-4">
                  <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md ring-1 shadow-zinc-800/5 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                    <span className="text-xl">🚲</span>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                      Efficient.
                    </h3>
                    <p className="text-xs text-zinc-600 dark:text-zinc-400">
                      Our technology empowers you to move faster and go further
                      with the same effort.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md ring-1 shadow-zinc-800/5 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                    <span className="text-xl">🕑</span>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                      Current.
                    </h3>
                    <p className="text-xs text-zinc-600 dark:text-zinc-400">
                      We automatically keep your documents up to date - so you
                      don't have to.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md ring-1 shadow-zinc-800/5 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                    <span className="text-xl">🔒</span>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                      Secure.
                    </h3>
                    <p className="text-xs text-zinc-600 dark:text-zinc-400">
                      Our end-to-end encryption keeps your data protected.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}
