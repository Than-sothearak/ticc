'use client';

import { Input } from '@/components/ui/input';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { useTransition, useRef } from 'react';
import { useDebouncedCallback } from 'use-debounce';

const Search = ({link}) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const [isPending, startTransition] = useTransition();


  const prevUrlRef = useRef(null);

 const handleSearch = useDebouncedCallback((term) => {
  startTransition(() => {
    // Get current params as an object
    const params = new URLSearchParams(searchParams.toString());

    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }

    // Replace URL while keeping other params (like year)
    replace(`${pathname}?${params.toString()}`, { scroll: false });
  });
}, 500);

  return (
    <div className="relative max-lg:order-2 w-full">
      <Input
        type="text"
        placeholder="Search..."
        className={`border px-4 py-2 text-sm w-full
          focus:outline-none focus:ring-2 focus:ring-black
          ${isPending ? 'pr-10 opacity-70' : ''}`}
        onChange={(e) => handleSearch(e.target.value)}
        defaultValue={searchParams.get('query') ?? ''}
      />

      {/* 🔄 Loading indicator */}
      {isPending && (
        <div className="absolute right-3 top-1/2 -translate-y-1/2">
          <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin block" />
        </div>
      )}
    </div>
  );
};

export default Search;
