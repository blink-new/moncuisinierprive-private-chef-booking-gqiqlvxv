import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Star, MapPin, ChefHat, Calendar, Users, Clock, Award, Heart, Share2, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

// Mock data - in a real app, this would come from an API
const chefData = {
  1: {
    id: 1,
    name: 'Chef Isabella Rodriguez',
    specialty: 'Mediterranean & Modern European',
    rating: 4.9,
    reviews: 234,
    experience: '12 years',
    image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=400&fit=crop',
    coverImage: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=400&fit=crop',
    priceRange: '€70-120/person',
    location: 'Paris, France',
    languages: ['French', 'English', 'Spanish'],
    responseTime: 'Within 2 hours',
    bio: 'With over 12 years of culinary experience, Chef Isabella brings the vibrant flavors of the Mediterranean to your table. Trained in the finest restaurants of Barcelona and Nice, she specializes in creating memorable dining experiences that celebrate fresh, seasonal ingredients and traditional cooking techniques with a modern twist.',
    achievements: [
      'Michelin-starred restaurant experience',
      'Winner of Young Chef Award 2019',
      'Featured in Culinary Magazine',
      'Certified Sommelier Level 2'
    ],
    services: [
      'Private Dining Experiences',
      'Weekly Batch Cooking',
      'Corporate Events',
      'Cooking Classes',
      'Wine Pairing Dinners'
    ],
    menus: [
      {
        id: 1,
        name: 'Mediterranean Feast',
        price: 85,
        rating: 4.9,
        reviews: 127,
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300&h=200&fit=crop',
        duration: '3 hours'
      },
      {
        id: 5,
        name: 'Spanish Tapas Journey',
        price: 75,
        rating: 4.8,
        reviews: 89,
        image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=300&h=200&fit=crop',
        duration: '2.5 hours'
      },
      {
        id: 6,
        name: 'Modern European Tasting',
        price: 110,
        rating: 4.9,
        reviews: 156,
        image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=300&h=200&fit=crop',
        duration: '4 hours'
      }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=300&fit=crop'
    ],
    reviews: [
      {
        id: 1,
        name: 'Sarah M.',
        rating: 5,
        date: '2 weeks ago',
        menu: 'Mediterranean Feast',
        comment: 'Chef Isabella exceeded all our expectations! The Mediterranean feast was absolutely divine. Every dish was perfectly seasoned and beautifully presented. She was professional, friendly, and made our anniversary dinner truly special.',
        avatar: 'SM'
      },
      {
        id: 2,
        name: 'Michael R.',
        rating: 5,
        date: '3 weeks ago',
        menu: 'Spanish Tapas Journey',
        comment: 'What an incredible experience! Isabella brought the authentic flavors of Spain to our home. The tapas were restaurant-quality and the wine pairings were spot on. Highly recommend for any special occasion.',
        avatar: 'MR'
      },
      {
        id: 3,
        name: 'Emma L.',
        rating: 4,
        date: '1 month ago',
        menu: 'Modern European Tasting',
        comment: 'Isabella is a true professional. The tasting menu was creative and delicious. She accommodated all our dietary restrictions without compromising on flavor. Great communication throughout the process.',
        avatar: 'EL'
      },
      {
        id: 4,
        name: 'David K.',
        rating: 5,
        date: '1 month ago',
        menu: 'Mediterranean Feast',
        comment: 'Outstanding chef! Isabella made our dinner party unforgettable. The food was exceptional and she handled everything seamlessly. Our guests are still talking about the meal weeks later.',
        avatar: 'DK'
      }
    ],
    availability: {
      thisWeek: ['2024-01-25', '2024-01-27', '2024-01-28'],
      nextWeek: ['2024-01-29', '2024-01-31', '2024-02-01', '2024-02-03']
    }
  }
}

export default function ChefDetail() {
  const { id } = useParams()
  const [selectedDate, setSelectedDate] = useState('')
  const [guestCount, setGuestCount] = useState('4')
  const [message, setMessage] = useState('')
  const [selectedTab, setSelectedTab] = useState('overview')

  const chef = chefData[id as keyof typeof chefData]

  if (!chef) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Chef not found</h2>
          <Link to="/">
            <Button>Return to Homepage</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center mr-4">
                <ArrowLeft className="h-5 w-5 mr-2" />
                <span>Back</span>
              </Link>
              <ChefHat className="h-8 w-8 text-primary mr-2" />
              <h1 className="text-2xl font-serif font-bold text-primary">MonCuisinierPrivé</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <Heart className="h-4 w-4 mr-2" />
                Save
              </Button>
              <Button variant="ghost" size="sm">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Cover Image */}
      <div className="relative h-64 md:h-80">
        <img
          src={chef.coverImage}
          alt={`${chef.name} kitchen`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Chef Profile Header */}
        <div className="relative -mt-20 mb-8">
          <div className="flex flex-col md:flex-row items-start md:items-end space-y-4 md:space-y-0 md:space-x-6">
            <img
              src={chef.image}
              alt={chef.name}
              className="w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover"
            />
            <div className="flex-1">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h1 className="text-3xl font-serif font-bold mb-2">{chef.name}</h1>
                    <p className="text-xl text-gray-600 mb-2">{chef.specialty}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {chef.location}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {chef.experience} experience
                      </div>
                    </div>
                  </div>
                  <div className="text-right mt-4 md:mt-0">
                    <div className="flex items-center justify-end mb-2">
                      <Star className="h-5 w-5 fill-yellow-400 text-yellow-400 mr-1" />
                      <span className="text-xl font-bold">{chef.rating}</span>
                      <span className="text-gray-500 ml-1">({chef.reviews} reviews)</span>
                    </div>
                    <p className="text-lg font-semibold text-primary">{chef.priceRange}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {chef.languages.map((language) => (
                    <Badge key={language} variant="secondary">
                      {language}
                    </Badge>
                  ))}
                  <Badge variant="outline" className="text-green-600 border-green-300">
                    Responds {chef.responseTime}
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs value={selectedTab} onValueChange={setSelectedTab}>
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="menus">Menus</TabsTrigger>
                <TabsTrigger value="gallery">Gallery</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-8">
                {/* About */}
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-serif font-bold mb-4">About Chef {chef.name.split(' ')[1]}</h2>
                    <p className="text-gray-700 leading-relaxed mb-6">{chef.bio}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-lg font-semibold mb-3 flex items-center">
                          <Award className="h-5 w-5 mr-2 text-primary" />
                          Achievements
                        </h3>
                        <ul className="space-y-2">
                          {chef.achievements.map((achievement, index) => (
                            <li key={index} className="flex items-start">
                              <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              <span className="text-gray-700">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold mb-3 flex items-center">
                          <ChefHat className="h-5 w-5 mr-2 text-primary" />
                          Services Offered
                        </h3>
                        <ul className="space-y-2">
                          {chef.services.map((service, index) => (
                            <li key={index} className="flex items-start">
                              <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              <span className="text-gray-700">{service}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="menus" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {chef.menus.map((menu) => (
                    <Link key={menu.id} to={`/menu/${menu.id}`}>
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
                          <h3 className="text-xl font-semibold mb-2">{menu.name}</h3>
                          <div className="flex items-center justify-between mb-3">
                            <span className="text-2xl font-bold text-primary">€{menu.price}/person</span>
                            <div className="flex items-center text-sm text-gray-500">
                              <Clock className="h-4 w-4 mr-1" />
                              {menu.duration}
                            </div>
                          </div>
                          <p className="text-sm text-gray-500">{menu.reviews} reviews</p>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="gallery" className="space-y-6">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {chef.gallery.map((image, index) => (
                    <div key={index} className="relative overflow-hidden rounded-lg aspect-square">
                      <img
                        src={image}
                        alt={`${chef.name} work ${index + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
                      />
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="reviews" className="space-y-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-serif font-bold">Reviews ({chef.reviews})</h2>
                  <div className="flex items-center">
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400 mr-1" />
                    <span className="text-xl font-bold">{chef.rating}</span>
                    <span className="text-gray-500 ml-1">average</span>
                  </div>
                </div>
                
                <div className="space-y-6">
                  {chef.reviews.map((review) => (
                    <Card key={review.id}>
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center">
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                              <span className="font-semibold text-primary">{review.avatar}</span>
                            </div>
                            <div>
                              <h4 className="font-semibold">{review.name}</h4>
                              <div className="flex items-center mb-1">
                                {[...Array(review.rating)].map((_, i) => (
                                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                ))}
                              </div>
                              <p className="text-sm text-gray-500">{review.menu} • {review.date}</p>
                            </div>
                          </div>
                        </div>
                        <p className="text-gray-700">{review.comment}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Book Chef {chef.name.split(' ')[1]}</h3>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Preferred Date</label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        type="date"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Number of Guests</label>
                    <div className="relative">
                      <Users className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        type="number"
                        value={guestCount}
                        onChange={(e) => setGuestCount(e.target.value)}
                        className="pl-10"
                        min="2"
                        max="20"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Message to Chef</label>
                    <Textarea
                      placeholder="Tell the chef about your event, dietary preferences, or any special requests..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={4}
                    />
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <Button className="w-full" size="lg">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Send Inquiry
                  </Button>
                  <Button variant="outline" className="w-full">
                    View Available Menus
                  </Button>
                </div>

                <div className="text-center">
                  <p className="text-sm text-gray-500 mb-2">
                    Response time: {chef.responseTime}
                  </p>
                  <p className="text-xs text-gray-400">
                    Free consultation • No commitment required
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="mt-6">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Chef Stats</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total Reviews</span>
                    <span className="font-semibold">{chef.reviews}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Average Rating</span>
                    <span className="font-semibold">{chef.rating}/5.0</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Experience</span>
                    <span className="font-semibold">{chef.experience}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Response Rate</span>
                    <span className="font-semibold">100%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}