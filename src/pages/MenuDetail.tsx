import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Star, Clock, Users, ChefHat, Calendar, MapPin, Heart, Share2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Separator } from '@/components/ui/separator'

// Mock data - in a real app, this would come from an API
const menuData = {
  1: {
    id: 1,
    name: 'Mediterranean Feast',
    chef: {
      id: 1,
      name: 'Chef Isabella Rodriguez',
      image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=300&h=300&fit=crop',
      rating: 4.9,
      reviews: 234
    },
    price: 85,
    rating: 4.9,
    reviews: 127,
    duration: '3 hours',
    serves: '2-12 people',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800&h=600&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop'
    ],
    tags: ['Mediterranean', 'Healthy', 'Gluten-Free'],
    description: 'Experience the vibrant flavors of the Mediterranean with this carefully curated feast featuring fresh seafood, seasonal vegetables, and aromatic herbs. This menu celebrates the healthy and delicious cuisine of the Mediterranean coast.',
    courses: [
      {
        name: 'Appetizers',
        items: [
          'Mediterranean mezze platter with hummus, tapenade, and fresh vegetables',
          'Grilled halloumi with honey and herbs',
          'Stuffed grape leaves with rice and pine nuts'
        ]
      },
      {
        name: 'Main Course',
        items: [
          'Grilled sea bass with lemon and olive oil',
          'Lamb souvlaki with tzatziki sauce',
          'Roasted vegetable moussaka (vegetarian option)'
        ]
      },
      {
        name: 'Sides',
        items: [
          'Greek village salad with feta cheese',
          'Lemon herb roasted potatoes',
          'Grilled seasonal vegetables'
        ]
      },
      {
        name: 'Dessert',
        items: [
          'Traditional baklava with honey and pistachios',
          'Fresh fruit with Greek yogurt and honey'
        ]
      }
    ],
    dietary: ['Gluten-Free Options', 'Vegetarian Options', 'Dairy-Free Options'],
    included: [
      'All ingredients and cooking equipment',
      'Professional chef service for 3 hours',
      'Menu planning consultation',
      'Kitchen cleanup',
      'Serving and presentation'
    ],
    reviews: [
      {
        id: 1,
        name: 'Sarah M.',
        rating: 5,
        date: '2 weeks ago',
        comment: 'Absolutely incredible experience! Chef Isabella created magic in our kitchen. Every dish was perfectly executed and the flavors were outstanding.'
      },
      {
        id: 2,
        name: 'Michael R.',
        rating: 5,
        date: '1 month ago',
        comment: 'This Mediterranean feast exceeded all expectations. The presentation was beautiful and the taste was even better. Highly recommend!'
      },
      {
        id: 3,
        name: 'Emma L.',
        rating: 4,
        date: '1 month ago',
        comment: 'Great menu with authentic Mediterranean flavors. Chef Isabella was professional and accommodating to our dietary restrictions.'
      }
    ]
  }
}

export default function MenuDetail() {
  const { id } = useParams()
  const [selectedDate, setSelectedDate] = useState('')
  const [guestCount, setGuestCount] = useState('4')
  const [specialRequests, setSpecialRequests] = useState('')
  const [selectedImage, setSelectedImage] = useState(0)

  const menu = menuData[id as keyof typeof menuData]

  if (!menu) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Menu not found</h2>
          <Link to="/">
            <Button>Return to Homepage</Button>
          </Link>
        </div>
      </div>
    )
  }

  const totalPrice = menu.price * parseInt(guestCount)

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-to-r from-orange-50 to-yellow-50 border-b border-orange-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center mr-4 text-orange-600 hover:text-orange-700 transition-colors">
                <ArrowLeft className="h-5 w-5 mr-2" />
                <span className="font-medium">Back</span>
              </Link>
              <ChefHat className="h-8 w-8 text-orange-600 mr-2" />
              <h1 className="text-2xl font-serif font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">MonCuisinierPrivé</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700 hover:bg-red-50">
                <Heart className="h-4 w-4 mr-2" />
                Save
              </Button>
              <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700 hover:bg-blue-50">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Image Gallery */}
            <div className="mb-8">
              <div className="relative mb-4">
                <img
                  src={menu.gallery[selectedImage]}
                  alt={menu.name}
                  className="w-full h-96 object-cover rounded-lg"
                />
              </div>
              <div className="grid grid-cols-4 gap-2">
                {menu.gallery.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${menu.name} ${index + 1}`}
                    className={`w-full h-20 object-cover rounded cursor-pointer transition-opacity ${
                      selectedImage === index ? 'opacity-100 ring-2 ring-primary' : 'opacity-70 hover:opacity-100'
                    }`}
                    onClick={() => setSelectedImage(index)}
                  />
                ))}
              </div>
            </div>

            {/* Menu Info */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <h1 className="text-4xl font-serif font-bold">{menu.name}</h1>
                <div className="flex items-center">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400 mr-1" />
                  <span className="font-semibold">{menu.rating}</span>
                  <span className="text-gray-500 ml-1">({menu.reviews} reviews)</span>
                </div>
              </div>

              <div className="flex items-center space-x-6 mb-6">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-gray-400 mr-2" />
                  <span>{menu.duration}</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-gray-400 mr-2" />
                  <span>{menu.serves}</span>
                </div>
                <div className="flex items-center">
                  <span className="text-2xl font-bold text-primary">€{menu.price}/person</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {menu.tags.map((tag, index) => (
                  <Badge 
                    key={tag} 
                    className={`${
                      index === 0 ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white' :
                      index === 1 ? 'bg-gradient-to-r from-green-500 to-teal-500 text-white' :
                      'bg-gradient-to-r from-orange-500 to-red-500 text-white'
                    } hover:scale-105 transition-transform`}
                  >
                    {tag}
                  </Badge>
                ))}
              </div>

              <p className="text-gray-700 text-lg leading-relaxed">{menu.description}</p>
            </div>

            {/* Chef Info */}
            <Card className="mb-8 bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="relative">
                    <img
                      src={menu.chef.image}
                      alt={menu.chef.name}
                      className="w-16 h-16 rounded-full object-cover mr-4 ring-4 ring-purple-200"
                    />
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center">
                      <span className="text-xs">👨‍🍳</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-purple-800">{menu.chef.name}</h3>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                      <span className="font-medium text-purple-700">{menu.chef.rating}</span>
                      <span className="text-purple-600 ml-1">({menu.chef.reviews} reviews)</span>
                    </div>
                  </div>
                  <div className="ml-auto">
                    <Link to={`/chef/${menu.chef.id}`}>
                      <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white">
                        View Profile
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Menu Details */}
            <div className="mb-8">
              <h2 className="text-2xl font-serif font-bold mb-6">Menu Details</h2>
              <div className="space-y-6">
                {menu.courses.map((course, index) => (
                  <div key={index}>
                    <h3 className="text-xl font-semibold mb-3">{course.name}</h3>
                    <ul className="space-y-2">
                      {course.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                    {index < menu.courses.length - 1 && <Separator className="mt-4" />}
                  </div>
                ))}
              </div>
            </div>

            {/* What's Included */}
            <div className="mb-8">
              <h2 className="text-2xl font-serif font-bold mb-6">What's Included</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {menu.included.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Dietary Information */}
            <div className="mb-8">
              <h2 className="text-2xl font-serif font-bold mb-6">Dietary Accommodations</h2>
              <div className="flex flex-wrap gap-2">
                {menu.dietary.map((diet) => (
                  <Badge key={diet} variant="outline" className="text-green-700 border-green-300">
                    {diet}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Reviews */}
            <div className="mb-8">
              <h2 className="text-2xl font-serif font-bold mb-6">Reviews</h2>
              <div className="space-y-6">
                {menu.reviews.map((review) => (
                  <Card key={review.id}>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                            <span className="font-semibold text-primary">{review.name[0]}</span>
                          </div>
                          <div>
                            <h4 className="font-semibold">{review.name}</h4>
                            <div className="flex items-center">
                              {[...Array(review.rating)].map((_, i) => (
                                <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                              ))}
                            </div>
                          </div>
                        </div>
                        <span className="text-sm text-gray-500">{review.date}</span>
                      </div>
                      <p className="text-gray-700">{review.comment}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24 bg-gradient-to-br from-green-50 to-blue-50 border-green-200 shadow-lg">
              <CardContent className="p-6">
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-3xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">€{menu.price}</span>
                    <span className="text-green-700 font-medium">per person</span>
                  </div>
                  <div className="flex items-center text-sm text-green-600">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                    <span className="font-medium">{menu.rating} ({menu.reviews} reviews)</span>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Date</label>
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
                        max="12"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Location</label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        placeholder="Enter your address"
                        className="pl-10"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Special Requests</label>
                    <Textarea
                      placeholder="Any dietary restrictions, allergies, or special requests..."
                      value={specialRequests}
                      onChange={(e) => setSpecialRequests(e.target.value)}
                      rows={3}
                    />
                  </div>
                </div>

                <div className="border-t pt-4 mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span>€{menu.price} × {guestCount} guests</span>
                    <span>€{totalPrice}</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span>Service fee</span>
                    <span>€{Math.round(totalPrice * 0.1)}</span>
                  </div>
                  <Separator className="my-2" />
                  <div className="flex justify-between items-center font-semibold text-lg">
                    <span>Total</span>
                    <span>€{totalPrice + Math.round(totalPrice * 0.1)}</span>
                  </div>
                </div>

                <Button className="w-full mb-4 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white shadow-lg hover:shadow-xl transition-all" size="lg">
                  🍽️ Book Now
                </Button>

                <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white">
                  💬 Contact Chef
                </Button>

                <p className="text-xs text-gray-500 text-center mt-4">
                  You won't be charged yet. Final pricing will be confirmed after consultation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}