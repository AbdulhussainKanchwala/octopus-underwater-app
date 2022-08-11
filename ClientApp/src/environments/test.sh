echo ${testVariables}
echo $testVariables
echo $production
sed -i -e "s/testVariables123/${testVariables}/g" src/environments/environment.prod.ts