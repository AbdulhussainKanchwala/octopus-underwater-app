echo ${testVariables}
echo $testVariables
echo $production
sed -i -e "s/testVariables123/${testVariables}/g" environment.prod.ts