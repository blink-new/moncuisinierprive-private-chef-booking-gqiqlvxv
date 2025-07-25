import { useState } from 'react'
import { Calendar, Users, Search, ChefHat, Star, Clock, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { Link } from 'react-router-dom'

const dietaryFilters = [
  'Vegan', 'Vegetarian', 'Kosher', 'Athlete', 'Weight Control', 'Senior', 'Pregnant', 'Best Sellers'
]

const mostLovedMenus = [
  {
    id: 1,
    name: 'Mediterranean Feast',
    chef: 'Chef Isabella',
    price: '€85/person',
    rating: 4.9,
    reviews: 127,
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop',
    tags: ['Mediterranean', 'Healthy', 'Gluten-Free'],
    duration: '3 hours'
  },
  {
    id: 2,
    name: 'French Culinary Journey',
    chef: 'Chef Pierre',
    price: '€120/person',
    rating: 4.8,
    reviews: 89,
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop',
    tags: ['French', 'Fine Dining', 'Wine Pairing'],
    duration: '4 hours'
  },
  {
    id: 3,
    name: 'Asian Fusion Experience',
    chef: 'Chef Yuki',
    price: '€95/person',
    rating: 4.9,
    reviews: 156,
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop',
    tags: ['Asian', 'Fusion', 'Spicy'],
    duration: '3.5 hours'
  },
  {
    id: 4,
    name: 'Italian Comfort Classics',
    chef: 'Chef Marco',
    price: '€75/person',
    rating: 4.7,
    reviews: 203,
    image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=400&h=300&fit=crop',
    tags: ['Italian', 'Comfort Food', 'Family Style'],
    duration: '2.5 hours'
  }
]

const availableChefs = [
  {
    id: 1,
    name: 'Chef Isabella Rodriguez',
    specialty: 'Mediterranean & Modern European',
    rating: 4.9,
    reviews: 234,
    experience: '12 years',
    image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=300&h=300&fit=crop',
    priceRange: '€70-120/person',
    location: 'Paris, France'
  },
  {
    id: 2,
    name: 'Chef Pierre Dubois',
    specialty: 'Classic French Cuisine',
    rating: 4.8,
    reviews: 189,
    experience: '15 years',
    image: 'https://images.unsplash.com/photo-1607631568010-a87245c0daf8?w=300&h=300&fit=crop',
    priceRange: '€90-150/person',
    location: 'Lyon, France'
  },
  {
    id: 3,
    name: 'Chef Yuki Tanaka',
    specialty: 'Japanese & Asian Fusion',
    rating: 4.9,
    reviews: 167,
    experience: '10 years',
    image: 'https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?w=300&h=300&fit=crop',
    priceRange: '€80-130/person',
    location: 'Tokyo, Japan'
  },
  {
    id: 4,
    name: 'Chef Marco Rossi',
    specialty: 'Authentic Italian',
    rating: 4.7,
    reviews: 298,
    experience: '18 years',
    image: 'https://images.unsplash.com/photo-1566554273541-37a9ca77b91b?w=300&h=300&fit=crop',
    priceRange: '€65-110/person',
    location: 'Rome, Italy'
  }
]

const recommendations = [
  {
    id: 1,
    title: 'Corporate Events',
    description: 'Professional catering for business occasions',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=300&h=200&fit=crop',
    category: 'Events'
  },
  {
    id: 2,
    title: 'Private Dining',
    description: 'Intimate dining experiences at home',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=300&h=200&fit=crop',
    category: 'Private Dining'
  },
  {
    id: 3,
    title: 'AI Nutritionist',
    description: 'Personalized meal planning with AI',
    image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=300&h=200&fit=crop',
    category: 'AI Nutritionist'
  },
  {
    id: 4,
    title: 'Hyrox Training Meals',
    description: 'Performance-focused nutrition plans',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop',
    category: 'Hyrox'
  }
]

export default function Homepage() {
  const [selectedDate, setSelectedDate] = useState('')
  const [guestCount, setGuestCount] = useState('2')
  const [activeFilters, setActiveFilters] = useState<string[]>([])

  const toggleFilter = (filter: string) => {
    setActiveFilters(prev => 
      prev.includes(filter) 
        ? prev.filter(f => f !== filter)
        : [...prev, filter]
    )
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <ChefHat className="h-8 w-8 text-primary mr-2" />
              <h1 className="text-2xl font-serif font-bold text-primary">MonCuisinierPrivé</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-primary transition-colors">Find Chefs</a>
              <a href="#" className="text-gray-700 hover:text-primary transition-colors">Menus</a>
              <a href="#" className="text-gray-700 hover:text-primary transition-colors">Events</a>
              <a href="#" className="text-gray-700 hover:text-primary transition-colors">About</a>
            </nav>
            <div className="flex items-center space-x-4">
              <Button variant="ghost">Sign In</Button>
              <Button>Sign Up</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 to-accent/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-serif font-bold text-gray-900 mb-4">
              Book Your Perfect
              <span className="text-primary block">Private Chef Experience</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From affordable weekly batch cooking to elegant private dining, 
              find the perfect chef for any occasion.
            </p>
          </div>

          {/* Search Bar */}
          <div className="bg-white rounded-2xl shadow-xl p-6 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <div className="relative">
                <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="pl-10 h-12"
                  placeholder="Select date"
                />
              </div>
              <div className="relative">
                <Users className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input
                  type="number"
                  value={guestCount}
                  onChange={(e) => setGuestCount(e.target.value)}
                  className="pl-10 h-12"
                  placeholder="Guests"
                  min="1"
                />
              </div>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input
                  className="pl-10 h-12"
                  placeholder="Location"
                />
              </div>
              <Button size="lg" className="h-12 bg-primary hover:bg-primary/90">
                <Search className="h-5 w-5 mr-2" />
                Search Chefs
              </Button>
            </div>

            {/* Quick Filters */}
            <div className="flex flex-wrap gap-2">
              {dietaryFilters.map((filter) => (
                <Badge
                  key={filter}
                  variant={activeFilters.includes(filter) ? "default" : "outline"}
                  className={`cursor-pointer transition-colors ${
                    activeFilters.includes(filter) 
                      ? 'bg-primary hover:bg-primary/90' 
                      : 'hover:bg-primary/10'
                  }`}
                  onClick={() => toggleFilter(filter)}
                >
                  {filter}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Most-Loved Menus Carousel */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-3xl font-serif font-bold text-gray-900">Most-Loved Menus</h3>
            <Button variant="outline">View All</Button>
          </div>
          
          <Carousel className="w-full">
            <CarouselContent>
              {mostLovedMenus.map((menu) => (
                <CarouselItem key={menu.id} className="md:basis-1/2 lg:basis-1/3">
                  <Link to={`/menu/${menu.id}`}>
                    <Card className="group cursor-pointer hover:shadow-lg transition-shadow">
                      <div className="relative overflow-hidden rounded-t-lg">
                        <img
                          src={menu.image}
                          alt={menu.name}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-4 right-4">
                          <Badge className="bg-white text-gray-900">
                            <Star className="h-3 w-3 mr-1 fill-yellow-400 text-yellow-400" />
                            {menu.rating}
                          </Badge>
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <h4 className="text-xl font-semibold mb-2">{menu.name}</h4>
                        <p className="text-gray-600 mb-3">by {menu.chef}</p>
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-2xl font-bold text-primary">{menu.price}</span>
                          <div className="flex items-center text-sm text-gray-500">
                            <Clock className="h-4 w-4 mr-1" />
                            {menu.duration}
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-1 mb-3">
                          {menu.tags.map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <p className="text-sm text-gray-500">{menu.reviews} reviews</p>
                      </CardContent>
                    </Card>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Available Chefs Carousel */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-3xl font-serif font-bold text-gray-900">Available Chefs</h3>
            <Button variant="outline">View All</Button>
          </div>
          
          <Carousel className="w-full">
            <CarouselContent>
              {availableChefs.map((chef) => (
                <CarouselItem key={chef.id} className="md:basis-1/2 lg:basis-1/3">
                  <Link to={`/chef/${chef.id}`}>
                    <Card className="group cursor-pointer hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-center mb-4">
                          <img
                            src={chef.image}
                            alt={chef.name}
                            className="w-16 h-16 rounded-full object-cover mr-4"
                          />
                          <div>
                            <h4 className="text-lg font-semibold">{chef.name}</h4>
                            <p className="text-sm text-gray-600">{chef.experience} experience</p>
                          </div>
                        </div>
                        <p className="text-gray-700 mb-3">{chef.specialty}</p>
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center">
                            <Star className="h-4 w-4 mr-1 fill-yellow-400 text-yellow-400" />
                            <span className="font-semibold">{chef.rating}</span>
                            <span className="text-sm text-gray-500 ml-1">({chef.reviews})</span>
                          </div>
                          <span className="text-sm font-medium text-primary">{chef.priceRange}</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <MapPin className="h-4 w-4 mr-1" />
                          {chef.location}
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* You Might Also Like */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-3xl font-serif font-bold text-gray-900">You Might Also Like</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {recommendations.map((item) => (
              <Card key={item.id} className="group cursor-pointer hover:shadow-lg transition-shadow">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-4">
                  <h4 className="font-semibold mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <ChefHat className="h-6 w-6 mr-2" />
                <h3 className="text-xl font-serif font-bold">MonCuisinierPrivé</h3>
              </div>
              <p className="text-primary-foreground/80">
                Connecting you with exceptional private chefs for unforgettable culinary experiences.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li><a href="#" className="hover:text-white transition-colors">Private Dining</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Batch Cooking</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Events</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cooking Classes</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Facebook</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/80">
            <p>&copy; 2024 MonCuisinierPrivé. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}