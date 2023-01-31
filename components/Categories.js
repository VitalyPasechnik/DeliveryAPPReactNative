import React from 'react';
import { View, Text, ScrollView } from 'react-native';

import CategoryCard from '../components/CategoryCard';

const Categories = ({ categoryData }) => {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingVertical: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
      
    >
      {categoryData?.map((item) => (
        <CategoryCard
          key={item.name}
          imgUrl={item.imgUrl}
          title={item.title}
        />
      ))}

    </ScrollView>
  )
}

export default Categories