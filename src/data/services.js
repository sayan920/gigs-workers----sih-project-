export const categories = [
  { id: 'all', name: 'All services', icon: 'grid' },
  { id: 'plumbing', name: 'Plumbing', icon: 'plumbing' },
  { id: 'cleaning', name: 'Cleaning', icon: 'cleaning' },
  { id: 'electrical', name: 'Electrical', icon: 'electrical' },
  { id: 'carpentry', name: 'Carpentry', icon: 'carpentry' },
  { id: 'gardening', name: 'Gardening', icon: 'gardening' },
];

export const providers = [
  { id: 'asha-verma', name: 'Asha Verma', initials: 'AV', skill: 'Plumbing specialist', experience: '8 years experience', rating: '4.9', reviews: '124', available: 'Available today', verified: true, bio: 'A careful, reliable plumbing professional for repairs, fittings and everyday home maintenance.', services: ['Tap & pipe repairs', 'Leak fixes', 'Bathroom fittings'] },
  { id: 'ravi-kumar', name: 'Ravi Kumar', initials: 'RK', skill: 'Home cleaner', experience: '6 years experience', rating: '4.8', reviews: '98', available: 'Available tomorrow', verified: true, bio: 'Experienced in thorough, respectful home cleaning for households and shared community spaces.', services: ['Deep cleaning', 'Kitchen cleaning', 'Move-in cleaning'] },
  { id: 'meera-shah', name: 'Meera Shah', initials: 'MS', skill: 'Electrical technician', experience: '10 years experience', rating: '4.9', reviews: '156', available: 'Available today', verified: true, bio: 'A trusted technician for safe household electrical repairs and small installations.', services: ['Switch & socket repair', 'Fan installation', 'Lighting fixes'] },
  { id: 'imran-ali', name: 'Imran Ali', initials: 'IA', skill: 'Carpenter', experience: '12 years experience', rating: '4.8', reviews: '87', available: 'Available this week', verified: true, bio: 'Skilled in dependable furniture repairs, custom fittings and small carpentry jobs.', services: ['Furniture repair', 'Shelves & fittings', 'Door repair'] },
  { id: 'kavita-nair', name: 'Kavita Nair', initials: 'KN', skill: 'Gardening specialist', experience: '7 years experience', rating: '4.9', reviews: '73', available: 'Available tomorrow', verified: true, bio: 'Friendly garden care for balconies, homes and shared green spaces.', services: ['Garden cleanup', 'Plant care', 'Pruning'] },
];

export const services = [
  { id: 'plumbing-repair', category: 'plumbing', title: 'Plumbing repair', description: 'Get help with leaks, taps, pipes and bathroom fittings.', duration: 'Usually 1–2 hours', providerId: 'asha-verma', tags: ['Leaks', 'Taps', 'Pipes'] },
  { id: 'home-cleaning', category: 'cleaning', title: 'Home cleaning', description: 'A thorough, dependable clean for your home.', duration: 'Usually 2–4 hours', providerId: 'ravi-kumar', tags: ['Kitchen', 'Bathroom', 'Living areas'] },
  { id: 'electrical-repair', category: 'electrical', title: 'Electrical repair', description: 'Safe support for common electrical repairs and fittings.', duration: 'Usually 1–2 hours', providerId: 'meera-shah', tags: ['Switches', 'Fans', 'Lights'] },
  { id: 'carpentry-help', category: 'carpentry', title: 'Carpentry help', description: 'Practical furniture and fixture repairs for your home.', duration: 'Usually 1–3 hours', providerId: 'imran-ali', tags: ['Furniture', 'Doors', 'Shelves'] },
  { id: 'garden-care', category: 'gardening', title: 'Garden care', description: 'Care for your plants, garden or community green space.', duration: 'Usually 1–3 hours', providerId: 'kavita-nair', tags: ['Plants', 'Cleanup', 'Pruning'] },
];

export const getService = (id) => services.find((service) => service.id === id);
export const getProvider = (id) => providers.find((provider) => provider.id === id);
